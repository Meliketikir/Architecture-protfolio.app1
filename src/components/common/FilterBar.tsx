import React from 'react';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  statuses: string[];
  selectedStatus: string | null;
  onStatusChange: (status: string | null) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  statuses,
  selectedStatus,
  onStatusChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div className="flex-1 min-w-[200px]">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Kategori
        </label>
        <select
          value={selectedCategory || ''}
          onChange={(e) => onCategoryChange(e.target.value || null)}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        >
          <option value="">Tümü</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 min-w-[200px]">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Durum
        </label>
        <select
          value={selectedStatus || ''}
          onChange={(e) => onStatusChange(e.target.value || null)}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        >
          <option value="">Tümü</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status === 'completed'
                ? 'Tamamlandı'
                : status === 'in-progress'
                ? 'Devam Ediyor'
                : 'Planlandı'}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar; 