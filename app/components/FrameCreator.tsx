'use client';

import { useState } from 'react';
import { Sparkles, Share2, Save } from 'lucide-react';

const templates = [
  { id: 1, name: 'Bullish Wave', gradient: 'from-green-400 to-blue-500' },
  { id: 2, name: 'Moon Shot', gradient: 'from-purple-400 to-pink-500' },
  { id: 3, name: 'Diamond Hands', gradient: 'from-blue-400 to-cyan-500' },
  { id: 4, name: 'To The Stars', gradient: 'from-orange-400 to-red-500' },
];

export function FrameCreator() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [message, setMessage] = useState('b402 to the moon! 🚀');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-fg mb-2">Create Bullish Frame</h2>
        <p className="text-fg/60">Generate and share your b402 sentiment</p>
      </div>

      {/* Template Selection */}
      <div>
        <label className="block text-sm font-medium text-fg mb-3">
          Choose Template
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => setSelectedTemplate(template)}
              className={`
                p-4 rounded-lg border-2 transition-all duration-200
                ${
                  selectedTemplate.id === template.id
                    ? 'border-accent bg-accent/10'
                    : 'border-surface hover:border-accent/50'
                }
              `}
            >
              <div
                className={`w-full h-20 rounded-md bg-gradient-to-br ${template.gradient} mb-2`}
              ></div>
              <p className="text-sm font-medium text-fg">{template.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div>
        <label className="block text-sm font-medium text-fg mb-2">
          Your Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 bg-surface text-fg rounded-lg border border-surface focus:border-accent focus:outline-none transition-all duration-200 resize-none"
          rows={3}
          placeholder="Share your bullish sentiment..."
        />
      </div>

      {/* Preview */}
      <div>
        <label className="block text-sm font-medium text-fg mb-3">Preview</label>
        <div className="relative overflow-hidden rounded-lg border border-surface">
          <div
            className={`w-full h-64 bg-gradient-to-br ${selectedTemplate.gradient} flex items-center justify-center p-6`}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <p className="text-white text-xl font-bold mb-2">{message}</p>
              <p className="text-white/80 text-sm">b402 Bullish Hub</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-200">
          <Share2 className="w-4 h-4" />
          <span className="font-medium">Share to Farcaster</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-surface text-fg rounded-lg hover:bg-surface/80 transition-all duration-200">
          <Save className="w-4 h-4" />
          <span className="font-medium">Save Frame</span>
        </button>
      </div>
    </div>
  );
}
