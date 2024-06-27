import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '@/components/ui/select'; // Adjust the import according to the actual library you are using


const SemesterSelect = ({ selectedSemester, setSelectedSemester }: any) => {
  return (
    <Select value={selectedSemester !== null ? selectedSemester.toString() : "all"} onValueChange={(value) => setSelectedSemester(value !== "all" ? parseInt(value) : null)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="All Semesters" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Semesters</SelectLabel>

          <SelectItem value="1">Semester 1</SelectItem>
          <SelectItem value="2">Semester 2</SelectItem>
          {/* Add more options as needed */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SemesterSelect;

