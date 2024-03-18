import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemester";

const AcademicSemester = () => {
    const { data } = useGetAllSemestersQuery(undefined);
    //!need to know
    //why does this data render 6 time in initial load?
  console.log(data);
  return (
    <div>
      <h2>This is AcademicSemester component</h2>
    </div>
  );
};

export default AcademicSemester;