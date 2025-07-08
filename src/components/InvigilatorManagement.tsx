import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Phone, Mail, Building, CheckCircle, XCircle } from 'lucide-react';
import { mockInvigilators } from '../data/mockData';
import { Invigilator } from '../types';

const InvigilatorManagement: React.FC = () => {
  const [invigilators, setInvigilators] = useState<Invigilator[]>(mockInvigilators);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingInvigilator, setEditingInvigilator] = useState<Invigilator | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'busy': return 'bg-yellow-100 text-yellow-800';
      case 'unavailable': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDeleteInvigilator = (id: string) => {
    setInvigilators(invigilators.filter(inv => inv.id !== id));
  };

  const InvigilatorForm = ({ invigilator, onSave, onCancel }: { 
    invigilator?: Invigilator; 
    onSave: (invigilator: Invigilator) => void; 
    onCancel: () => void; 
  }) => {
    const [formData, setFormData] = useState<Invigilator>(invigilator || {
      id: '',
      name: '',
      email: '',
      department: '',
      phone: '',
      availability: [],
      assignedExams: [],
      status: 'available'
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newInvigilator = {
        ...formData,
        id: invigilator ? invigilator.id : Date.now().toString()
      };
      onSave(newInvigilator);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <h3 className="text-lg font-semibold mb-4">
            {invigilator ? 'Edit Invigilator' : 'Add New Invigilator'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <input
                type="text"
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value as 'available' | 'busy' | 'unavailable'})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="available">Available</option>
                <option value="busy">Busy</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                {invigilator ? 'Update' : 'Add'} Invigilator
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Invigilator Management</h1>
          <p className="text-gray-600">Manage invigilator profiles and availability</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Invigilator
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {invigilators.map((invigilator) => (
          <div key={invigilator.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{invigilator.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Building className="w-4 h-4 mr-1" />
                  {invigilator.department}
                </div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(invigilator.status)}`}>
                {invigilator.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                {invigilator.email}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                {invigilator.phone}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Current Assignments</h4>
              <p className="text-sm text-gray-600">
                {invigilator.assignedExams.length} active assignments
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setEditingInvigilator(invigilator)}
                className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={() => handleDeleteInvigilator(invigilator.id)}
                className="bg-red-600 text-white py-2 px-3 rounded-md hover:bg-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddForm && (
        <InvigilatorForm
          onSave={(invigilator) => {
            setInvigilators([...invigilators, invigilator]);
            setShowAddForm(false);
          }}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      {editingInvigilator && (
        <InvigilatorForm
          invigilator={editingInvigilator}
          onSave={(updatedInvigilator) => {
            setInvigilators(invigilators.map(inv => inv.id === updatedInvigilator.id ? updatedInvigilator : inv));
            setEditingInvigilator(null);
          }}
          onCancel={() => setEditingInvigilator(null)}
        />
      )}
    </div>
  );
};

export default InvigilatorManagement;