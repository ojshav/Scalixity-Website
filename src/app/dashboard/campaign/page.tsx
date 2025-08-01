"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/app/components/ui/card";
import { Button } from "@/src/app/components/ui/button";
import { Input } from "@/src/app/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/src/app/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/src/app/components/ui/dialog";
import { Label } from "@/src/app/components/ui/label";
import { useRouter } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const campaignTypes = [
  { value: "Competition", label: "Competition" },
  { value: "Promotion", label: "Promotion" },
  { value: "Awareness", label: "Awareness" },
  { value: "Other", label: "Other" },
];

interface Campaign {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  type: string;
  created_at: string;
  updated_at: string;
}

function formatISTDateTime(dateString: string) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function DashboardCampaignPage() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    startDate: "",
    startTime: "00:00",
    endDate: "",
    endTime: "12:00",
    type: "Competition",
  });
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseURL}/api/campaigns`);
      if (!response.ok) throw new Error("Failed to fetch campaigns");
      const data = await response.json();
      setCampaigns(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error fetching campaigns");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (value: string) => {
    setForm({ ...form, type: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Combine date and time to ISO string in IST
      const start = new Date(`${form.startDate}T${form.startTime}:00+05:30`).toISOString();
      const end = new Date(`${form.endDate}T${form.endTime}:00+05:30`).toISOString();
      const response = await fetch(`${baseURL}/api/campaigns`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          start_date: start,
          end_date: end,
          type: form.type,
        }),
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to create campaign");
      }
      fetchCampaigns();
      setOpen(false);
      setForm({ name: "", startDate: "", startTime: "00:00", endDate: "", endTime: "12:00", type: "Competition" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error creating campaign");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">Campaigns</h1>
          <Button onClick={() => setOpen(true)} className="px-6 py-2 text-base">Add Campaign</Button>
        </div>
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>All Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12 text-gray-500">Loading...</div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">{error}</div>
            ) : campaigns.length === 0 ? (
              <div className="text-gray-500 py-12 text-center">No campaigns yet. Click &quot;Add Campaign&quot; to create one.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {campaigns.map((c) => (
                      <tr key={c.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{c.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{c.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatISTDateTime(c.start_date)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatISTDateTime(c.end_date)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(c.created_at).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <Button size="sm" variant="outline" onClick={() => router.push(`/dashboard/campaign/${c.id}/form`)}>
                            Edit Form
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {/* Add Campaign Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md w-full bg-white border border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-black">Add Campaign</DialogTitle>
            <DialogDescription className="text-gray-900">Enter campaign details below.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <Label htmlFor="name">Campaign Name</Label>
              <Input id="name" name="name" placeholder="Campaign Name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" name="startDate" type="date" value={form.startDate} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="startTime">Start Time</Label>
                <Input id="startTime" name="startTime" type="time" value={form.startTime} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Input id="endDate" name="endDate" type="date" value={form.endDate} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="endTime">End Time</Label>
                <Input id="endTime" name="endTime" type="time" value={form.endTime} onChange={handleChange} required />
              </div>
            </div>
            <div>
              <Label htmlFor="type">Type</Label>
              <Select value={form.type} onValueChange={handleTypeChange}>
                <SelectTrigger id="type" className="w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {campaignTypes.map((t) => (
                    <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full mt-4" disabled={loading}>Create Campaign</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
