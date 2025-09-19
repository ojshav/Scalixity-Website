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
  description?: string;
  imageUrl?: string;
  startDate: string;
  endDate: string;
  type: string;
  createdAt: string;
  updatedAt: string;
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
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    image_url: "",
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
      // Ensure data is always an array
      setCampaigns(Array.isArray(data) ? data : []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error fetching campaigns");
      // Set empty array on error to prevent map error
      setCampaigns([]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (value: string) => {
    setForm({ ...form, type: value });
  };

  const openAddModal = () => {
    setEditingCampaign(null);
    setForm({ name: "", description: "", image_url: "", startDate: "", startTime: "00:00", endDate: "", endTime: "12:00", type: "Competition" });
    setOpen(true);
  };

  const openEditModal = (campaign: Campaign) => {
    setEditingCampaign(campaign);
    const startDate = campaign.startDate ? campaign.startDate.split('T')[0] : "";
    const endDate = campaign.endDate ? campaign.endDate.split('T')[0] : "";
    setForm({
      name: campaign.name,
      description: campaign.description || "",
      image_url: campaign.imageUrl || "",
      startDate,
      startTime: "00:00",
      endDate,
      endTime: "12:00",
      type: campaign.type,
    });
    setOpen(true);
  };

  const deleteCampaign = async (campaignId: number) => {
    if (!confirm("Are you sure you want to delete this campaign? This action cannot be undone.")) {
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseURL}/api/campaigns/${campaignId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to delete campaign");
      }
      fetchCampaigns();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error deleting campaign");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Format dates as YYYY-MM-DD for database
      const start = form.startDate;
      const end = form.endDate;
      
      const method = editingCampaign ? "PUT" : "POST";
      const url = editingCampaign 
        ? `${baseURL}/api/campaigns/${editingCampaign.id}` 
        : `${baseURL}/api/campaigns`;
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          description: form.description || null,
          imageUrl: form.image_url || null,
          startDate: start,
          endDate: end,
          type: form.type,
        }),
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || `Failed to ${editingCampaign ? 'update' : 'create'} campaign`);
      }
      fetchCampaigns();
      setOpen(false);
      setEditingCampaign(null);
      setForm({ name: "", description: "", image_url: "", startDate: "", startTime: "00:00", endDate: "", endTime: "12:00", type: "Competition" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : `Error ${editingCampaign ? 'updating' : 'creating'} campaign`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">Campaigns</h1>
          <Button onClick={openAddModal} className="px-6 py-2 text-base">Add Campaign</Button>
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
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {campaigns.map((c) => (
                      <tr key={c.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{c.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">
                          {c.description || "No description"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{c.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatISTDateTime(c.startDate)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatISTDateTime(c.endDate)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(c.createdAt).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => openEditModal(c)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              Edit
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive" 
                              onClick={() => deleteCampaign(c.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              Delete
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => router.push(`/dashboard/campaign/${c.id}/form`)}>
                              Edit Form
                            </Button>
                            <Button size="sm" variant="secondary" onClick={() => router.push(`/dashboard/campaign/${c.id}/responses`)}>
                              Responses
                            </Button>
                          </div>
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
            <DialogTitle className="text-black">
              {editingCampaign ? "Edit Campaign" : "Add Campaign"}
            </DialogTitle>
            <DialogDescription className="text-gray-900">
              {editingCampaign ? "Update campaign details below." : "Enter campaign details below."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <Label htmlFor="name">Campaign Name</Label>
              <Input id="name" name="name" placeholder="Campaign Name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <textarea 
                id="description" 
                name="description" 
                placeholder="Enter campaign description..." 
                value={form.description} 
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="image_url">Image URL</Label>
              <Input id="image_url" name="image_url" placeholder="https://example.com/image.jpg" value={form.image_url} onChange={handleChange} />
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
            <Button type="submit" className="w-full mt-4" disabled={loading}>
              {editingCampaign ? "Update Campaign" : "Create Campaign"}
            </Button>
            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
