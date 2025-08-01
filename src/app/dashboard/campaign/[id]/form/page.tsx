"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/src/app/components/ui/button";
import { Input } from "@/src/app/components/ui/input";
import { Textarea } from "@/src/app/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/src/app/components/ui/select";
import { Label } from "@/src/app/components/ui/label";
import { X, Plus, ArrowUp, ArrowDown } from "lucide-react";
import { useParams } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const QUESTION_TYPES = [
  { value: "short", label: "Short Answer" },
  { value: "paragraph", label: "Paragraph" },
  { value: "multiple", label: "Multiple Choice" },
  { value: "checkbox", label: "Checkboxes" },
];

interface Question {
  id: string;
  label: string;
  type: string;
  options?: string[];
}

export default function CampaignFormBuilder() {
  const { id } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Fetch questions on mount
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`${baseURL}/api/campaigns/${id}/questions`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch questions");
        return res.json();
      })
      .then((data) => {
        // Assign a random id to each question for UI tracking if not present
        setQuestions(
          data.map((q: { label: string; type: string; options?: string[] }) => ({
            id: Math.random().toString(36).substr(2, 9),
            label: q.label,
            type: q.type,
            options: q.options || [],
          }))
        );
      })
      .catch((err) => setError(err.message || "Error fetching questions"))
      .finally(() => setLoading(false));
  }, [id]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: Math.random().toString(36).substr(2, 9),
        label: "",
        type: "short",
        options: [],
      },
    ]);
  };

  const removeQuestion = (qid: string) => {
    setQuestions(questions.filter((q) => q.id !== qid));
  };

  const moveQuestion = (qid: string, dir: "up" | "down") => {
    const idx = questions.findIndex((q) => q.id === qid);
    if (dir === "up" && idx > 0) {
      const newQs = [...questions];
      [newQs[idx - 1], newQs[idx]] = [newQs[idx], newQs[idx - 1]];
      setQuestions(newQs);
    } else if (dir === "down" && idx < questions.length - 1) {
      const newQs = [...questions];
      [newQs[idx + 1], newQs[idx]] = [newQs[idx], newQs[idx + 1]];
      setQuestions(newQs);
    }
  };

  const updateQuestion = (qid: string, field: string, value: string | string[]) => {
    setQuestions(
      questions.map((q) =>
        q.id === qid ? { ...q, [field]: value } : q
      )
    );
  };

  const updateOption = (qid: string, idx: number, value: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === qid
          ? {
              ...q,
              options: q.options?.map((opt, i) => (i === idx ? value : opt)),
            }
          : q
      )
    );
  };

  const addOption = (qid: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === qid
          ? { ...q, options: [...(q.options || []), ""] }
          : q
      )
    );
  };

  const removeOption = (qid: string, idx: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === qid
          ? { ...q, options: q.options?.filter((_, i) => i !== idx) }
          : q
      )
    );
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      // Prepare questions for backend (remove UI-only id)
      const payload = questions.map((q) => ({
        label: q.label,
        type: q.type,
        options: q.options || [],
      }));
      const response = await fetch(`${baseURL}/api/campaigns/${id}/questions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questions: payload }),
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to save questions");
      }
      setSuccess("Form saved successfully!");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error saving questions");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Edit Campaign Form</h1>
        {loading ? (
          <div className="text-center text-gray-500 py-12">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-12">{error}</div>
        ) : (
          <>
            <div className="space-y-6">
              {questions.map((q, idx) => (
                <div key={q.id} className="bg-gray-50 border rounded-lg p-4 relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Label className="flex-1">
                      Question {idx + 1}
                      <Input
                        className="mt-1"
                        placeholder="Enter question text"
                        value={q.label}
                        onChange={(e) => updateQuestion(q.id, "label", e.target.value)}
                      />
                    </Label>
                    <Select value={q.type} onValueChange={(val) => updateQuestion(q.id, "type", val)}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {QUESTION_TYPES.map((t) => (
                          <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button size="icon" variant="ghost" onClick={() => moveQuestion(q.id, "up")} disabled={idx === 0}><ArrowUp /></Button>
                    <Button size="icon" variant="ghost" onClick={() => moveQuestion(q.id, "down")} disabled={idx === questions.length - 1}><ArrowDown /></Button>
                    <Button size="icon" variant="destructive" onClick={() => removeQuestion(q.id)}><X /></Button>
                  </div>
                  {/* Options for multiple/checkbox */}
                  {(q.type === "multiple" || q.type === "checkbox") && (
                    <div className="space-y-2 mt-2">
                      <Label>Options</Label>
                      {(q.options || []).map((opt, i) => (
                        <div key={i} className="flex items-center gap-2 mt-1">
                          <Input
                            className="flex-1"
                            placeholder={`Option ${i + 1}`}
                            value={opt}
                            onChange={(e) => updateOption(q.id, i, e.target.value)}
                          />
                          <Button size="icon" variant="ghost" onClick={() => removeOption(q.id, i)}><X /></Button>
                        </div>
                      ))}
                      <Button size="sm" variant="outline" onClick={() => addOption(q.id)} className="mt-1"><Plus className="w-4 h-4 mr-1" /> Add Option</Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button className="mt-6" onClick={addQuestion} variant="secondary"><Plus className="w-4 h-4 mr-1" /> Add Question</Button>
            <div className="mt-10 flex justify-end">
              <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : "Save Form"}</Button>
            </div>
            {success && <div className="text-green-600 text-center mt-4">{success}</div>}
            {/* Live Preview */}
            <div className="mt-12 border-t pt-8">
              <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
              <form className="space-y-6">
                {questions.map((q, idx) => (
                  <div key={q.id} className="space-y-2">
                    <Label>{q.label || `Question ${idx + 1}`}</Label>
                    {q.type === "short" && <Input placeholder="Short answer" disabled />}
                    {q.type === "paragraph" && <Textarea placeholder="Paragraph" disabled />}
                    {q.type === "multiple" && (
                      <div className="space-y-1">
                        {(q.options || []).map((opt, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <input type="radio" disabled />
                            <span>{opt || `Option ${i + 1}`}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {q.type === "checkbox" && (
                      <div className="space-y-1">
                        {(q.options || []).map((opt, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <input type="checkbox" disabled />
                            <span>{opt || `Option ${i + 1}`}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 