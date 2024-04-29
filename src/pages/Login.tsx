import { Button, Row } from 'antd'

import { FieldValues, useForm, useFormContext } from 'react-hook-form'
import { useLoginMutation } from '../redux/features/auth/authApi'
import { useAppDispatch } from '../redux/hooks'
import { TUser, setUser } from '../redux/features/auth/authSlice'
import { verifyToken } from '../utils/verifyToken'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import PHForm from '../components/form/PHForm'
import PHInput from '../components/form/PHInput'


const Login = () => {

	 const navigate  = useNavigate()

	const dispatch= useAppDispatch ()


	

	 const [login,{error}] =useLoginMutation()



	 const onSubmit =async(data:FieldValues) =>{

		console.log( data)

		const toastId=  toast.loading("Loggin in")
	
		try {
			
			
			const userInfo= {
			 id:data.userId,
			 password: data.password,
	 
			}
			const res = await login(userInfo ).unwrap()
			const  user =verifyToken(res.data.accessToken) as TUser
			console.log(user )
			dispatch (setUser	({user:user,token: res.data.accessToken}))
			toast.success("logged In",{id:toastId,duration:1000})
			navigate(`/${user.role}/dashboard`)
		} catch (error) {
			toast.error("something went wrong",{id:toastId,duration:1000})
		}
	 }
  return ( 
	 <Row justify="center" align="middle" style={{height:"100vh"}} >

	 <PHForm onSubmit={onSubmit}>
		

	
		 <PHInput type="text" name= "userId" label="ID:"></PHInput>

		 
	
		  <PHInput type="text"name="password" label="Password"></PHInput>
	
		 <Button  htmlType='submit'>Login</Button>
	 </PHForm>
	 </Row>
  )
}

export default Login





	//  const {register,handleSubmit} =useForm({
	// 	defaultValues:{
	// 		userId:"A-0001",
	// 	   password:"admin123" 
	// 	}
	//  })



	