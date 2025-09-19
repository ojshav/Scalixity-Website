"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/src/app/components/ui/button";
import { Badge } from "@/src/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/app/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/src/app/components/ui/select";
import { useParams } from "next/navigation";
import { Download, Eye, Calendar, User, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

interface Submission {
  id: number;
  campaignId: number;
  visitorId: string;
  answers: Record<string, string | boolean | string[]>;
  status: 'SUBMITTED' | 'REVIEWED' | 'APPROVED' | 'REJECTED';
  createdAt: string;
  updatedAt: string;
}

interface Campaign {
  id: number;
  name: string;
  description?: string;
}

interface CampaignQuestion {
  id: number;
  campaign_id: number;
  question_order: number;
  label: string;
  type: string;
  options: string[];
}

const STATUS_COLORS = {
  SUBMITTED: "bg-blue-100 text-blue-800",
  REVIEWED: "bg-yellow-100 text-yellow-800",
  APPROVED: "bg-green-100 text-green-800",
  REJECTED: "bg-red-100 text-red-800",
};

const STATUS_ICONS = {
  SUBMITTED: Clock,
  REVIEWED: Eye,
  APPROVED: CheckCircle,
  REJECTED: XCircle,
};

export default function CampaignResponses() {
  const { id } = useParams();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [questions, setQuestions] = useState<CampaignQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchData();
  }, [id]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch campaign details
      const campaignRes = await fetch(`${baseURL}/api/campaigns/${id}`);
      if (campaignRes.ok) {
        const campaignData = await campaignRes.json();
        setCampaign(campaignData);
      }

      // Fetch questions
      const questionsRes = await fetch(`${baseURL}/api/campaigns/${id}/questions`);
      if (questionsRes.ok) {
        const questionsData = await questionsRes.json();
        setQuestions(questionsData);
      }

      // Fetch submissions
      const submissionsRes = await fetch(`${baseURL}/api/campaigns/${id}/submissions`);
      if (submissionsRes.ok) {
        const submissionsData = await submissionsRes.json();
        console.log('Fetched submissions:', submissionsData);
        setSubmissions(submissionsData);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const updateSubmissionStatus = async (submissionId: number, newStatus: string) => {
    try {
      const response = await fetch(`${baseURL}/api/campaigns/submissions/${submissionId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        // Update local state
        setSubmissions(submissions.map(sub => 
          sub.id === submissionId ? { ...sub, status: newStatus as Submission['status'] } : sub
        ));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const exportToCSV = () => {
    if (!submissions.length) return;

    const headers = ["Submission ID", "Visitor ID", "Status", "Submitted At", ...questions.map(q => q.label)];
    const csvData = submissions.map(sub => [
      sub.id,
      sub.visitorId,
      sub.status,
      new Date(sub.createdAt).toLocaleString(),
      ...questions.map(q => sub.answers[`question_${q.id}`] || "")
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `campaign-${id}-responses.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredSubmissions = submissions.filter(sub => 
    statusFilter === "all" || sub.status === statusFilter
  );

  const getQuestionLabel = (questionId: string) => {
    const question = questions.find(q => `question_${q.id}` === questionId);
    return question ? question.label : questionId;
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-gray-500 py-12">Loading responses...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-red-500 py-12">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {campaign?.name || "Campaign"} Responses
            </h1>
            <p className="text-gray-600 mt-2">
              {submissions.length} total submissions
            </p>
          </div>
          <div className="flex gap-3">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="SUBMITTED">Submitted</SelectItem>
                <SelectItem value="REVIEWED">Reviewed</SelectItem>
                <SelectItem value="APPROVED">Approved</SelectItem>
                <SelectItem value="REJECTED">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={exportToCSV} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">Submitted</p>
                  <p className="text-2xl font-bold">
                    {submissions.filter(s => s.status === 'SUBMITTED').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Eye className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">Reviewed</p>
                  <p className="text-2xl font-bold">
                    {submissions.filter(s => s.status === 'REVIEWED').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">Approved</p>
                  <p className="text-2xl font-bold">
                    {submissions.filter(s => s.status === 'APPROVED').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">Rejected</p>
                  <p className="text-2xl font-bold">
                    {submissions.filter(s => s.status === 'REJECTED').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No submissions found</p>
              </CardContent>
            </Card>
          ) : (
            filteredSubmissions.map((submission) => {
              const StatusIcon = STATUS_ICONS[submission.status];
              return (
                <Card key={submission.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            Submission #{submission.id}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(submission.createdAt).toLocaleDateString()}
                            </div>
                            <span>ID: {submission.visitorId}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={STATUS_COLORS[submission.status]}>
                          {React.createElement(StatusIcon, { className: "w-3 h-3 mr-1" })}
                          {submission.status}
                        </Badge>
                        <Select 
                          value={submission.status} 
                          onValueChange={(value) => updateSubmissionStatus(submission.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="SUBMITTED">Submitted</SelectItem>
                            <SelectItem value="REVIEWED">Reviewed</SelectItem>
                            <SelectItem value="APPROVED">Approved</SelectItem>
                            <SelectItem value="REJECTED">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            console.log('Selected submission:', submission);
                            console.log('Submission answers:', submission.answers);
                            setSelectedSubmission(submission);
                          }}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(submission.answers).slice(0, 6).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <p className="text-sm font-medium text-gray-700">
                            {getQuestionLabel(key)}
                          </p>
                          <p className="text-sm text-gray-600 truncate">
                            {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value)}
                          </p>
                        </div>
                      ))}
                      {Object.keys(submission.answers).length > 6 && (
                        <div className="text-sm text-gray-500">
                          +{Object.keys(submission.answers).length - 6} more answers
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Detailed View Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Submission #{selectedSubmission.id}</h2>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedSubmission(null)}
                  >
                    ×
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Visitor ID</p>
                      <p className="text-gray-600">{selectedSubmission.visitorId}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Submitted</p>
                      <p className="text-gray-600">
                        {new Date(selectedSubmission.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-medium text-gray-700 mb-3">Answers</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedSubmission.answers).length > 0 ? (
                        Object.entries(selectedSubmission.answers).map(([key, value]) => (
                          <div key={key} className="space-y-1">
                            <p className="text-sm font-medium text-gray-700">
                              {getQuestionLabel(key)}
                            </p>
                            <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                              {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value)}
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="text-sm text-gray-500 bg-gray-50 p-2 rounded">
                          No answers found. This might be due to a data format issue.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 