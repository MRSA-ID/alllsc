import React, { useCallback, useState } from "react";

interface CheckboxItem {
	id: string;
	label: string;
}

interface FilterSection {
	title: string;
	filterKey: string;
	items: CheckboxItem[];
}

interface SidebarFilterProps {
	sections: FilterSection[];
	onSelectionChange?: (filters: { [key: string]: string[] }) => void;
}

const Sidebar: React.FC<SidebarFilterProps> = ({
	sections,
	onSelectionChange,
}) => {
	// State to track checked items across all sections
	const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
		{}
	);

	// Toggle checkbox state
	const handleCheckboxToggle = useCallback(
		(itemId: string) => {
			const newCheckedItems = {
				...checkedItems,
				[itemId]: !checkedItems[itemId],
			};

			setCheckedItems(newCheckedItems);

			// Organize selected items by section
			const selectedItemsBySection = sections.reduce((acc, section) => {
				const selectedInSection = Object.keys(newCheckedItems).filter(
					(key) =>
						newCheckedItems[key] &&
						section.items.some((item) => item.id === key)
				);

				if (selectedInSection.length > 0) {
					acc[section.filterKey] = selectedInSection;
				}

				return acc;
			}, {} as { [key: string]: string[] });

			// Call filter change callback
			if (onSelectionChange) {
				onSelectionChange(selectedItemsBySection);
			}
		},
		[checkedItems, sections, onSelectionChange]
	);

	// Checkbox component to maintain consistency
	const Checkbox: React.FC<{ item: CheckboxItem }> = ({ item }) => (
		<div className="items-top flex space-x-2 mb-2">
			<button
				type="button"
				role="checkbox"
				aria-checked={!!checkedItems[item.id]}
				data-state={checkedItems[item.id] ? "checked" : "unchecked"}
				onClick={() => handleCheckboxToggle(item.id)}
				className={`
          peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
          focus-visible:ring-offset-2 
          ${
						checkedItems[item.id]
							? "bg-blue-500 text-white"
							: "border-gray-300 bg-white"
					}
        `}
			/>
			<div className="grid gap-1.5 leading-none">
				<label className="text-sm font-medium text-gray-700">
					{item.label}
				</label>
			</div>
		</div>
	);

	return (
		<div className="flex flex-col gap-2 rounded-lg w-[300px] p-4">
			{sections.map((section, sectionIndex) => (
				<div
					key={sectionIndex}
					className="mb-6">
					<h3 className="text-lg font-bold text-[#253961] mb-3 pb-2">
						{section.title}
					</h3>
					{section.items.map((item) => (
						<Checkbox
							key={item.id}
							item={item}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Sidebar;
