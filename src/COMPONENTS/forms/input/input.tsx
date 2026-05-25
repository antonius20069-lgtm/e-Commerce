import type { Path ,FieldValues ,UseFormRegister } from "react-hook-form"


   type Inputs<TFieldValues extends FieldValues> = {
    label :string,
    type ?:string,
  name :Path<TFieldValues>,
  register : UseFormRegister<TFieldValues>,
  errors ?:string,
  onBlur ?: (e: React.FocusEvent<HTMLInputElement>) => void, 
  formText ?:string,
  sucess ?:string,
  used?:string
  }
   

const Inputcomponent = <TFieldValues extends FieldValues>({
 onBlur,   label,type= "text" , register ,name, errors ,formText ,sucess ,used}:Inputs<TFieldValues> ) => {

   const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
   register(name).onBlur(e)
  if (onBlur) onBlur(e)    
   }
    return (
   <>
  <label>
    <input
      className="input"
      type={type}
        {...register(name)}
  onBlur={handleBlur} 
      aria-invalid={errors ? true : false}
    />
    {errors ? (
      <span style={{ color: "red" }}>{errors}</span>
    ) : (
      <>
        <span>{label}</span>
        <span style={{ color: "green" }}>{sucess}</span>
        <span>{formText}</span>
        <span style={{ color: "red" }}>{used}</span>
      </>
    )}
  </label>
</>
    )
}

export default Inputcomponent