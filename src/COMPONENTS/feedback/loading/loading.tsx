import Skeletonloading from "../loading/Skeleton/Skeleton";

interface LoadingProps {
loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
children?: React.ReactNode;

}

const Loading =({loading, error, children}: LoadingProps)=>{
if(loading === "pending"){
  
  return <Skeletonloading />
  
}
if(loading === "failed"){
  return <div>Error: {error}</div>
}

  return (<>{children}</>) 
}

export default Loading;