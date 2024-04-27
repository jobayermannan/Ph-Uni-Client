import { useGetAllSemestersQuery } from "../../../redux/features/auth/academicSemester/academicSemesterApi";

const AcademicSemester = () => {

	const {data} = useGetAllSemestersQuery(undefined)

          console.log(data)
  return (
	 <div>
		academicSemester 
			  
	 </div>
  );
};

export default AcademicSemester;