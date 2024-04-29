
import { FieldValues, FormProvider, useForm } from "react-hook-form";

type PHFormProps = {
	onSubmit: (data: FieldValues) => Promise<void>;
	children: React.ReactNode;
 };
 
 const PHForm: React.FC<PHFormProps> = ({ onSubmit, children }) => {
	const 	methods= useForm()
  return (
	<FormProvider {...methods}>

	 <form onSubmit={methods.handleSubmit(onSubmit)}>
		{children}
			  
	 </form>
	</FormProvider>
  );
 };
 
 export default PHForm;
 





















// const PHForm = ({onSubmit}) => {


// 	
// };

// export default PHForm;