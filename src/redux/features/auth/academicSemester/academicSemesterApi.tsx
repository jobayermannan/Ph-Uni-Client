import { baseApi } from "../../../api/baseApi"


const academicSemesterApi =baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllSemesters: builder.query({
			query:(userInfo)=> ({
				url:"/academic-semesters",
           method: "GET",
			  body: userInfo
			})
		})

	})
})

export const  {useGetAllSemestersQuery} =academicSemesterApi