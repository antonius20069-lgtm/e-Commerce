import Lottie from "lottie-react";

// استورد الـ JSON files بتاعت الـ animations
import success from "../../../assets/success.json";
import empty from "../../../assets/empty.json";


// نوع الـ type المسموح بيه
type LottieType = "success" | "empty" | "loading";

// ربط كل type بالـ animation بتاعته
const animationMap: Record<LottieType, object> = {
  success: success,
  empty: empty,
  loading: empty

};

type LottieHandlerProps = {
  type: LottieType;
  message?: string;
};

export default function LottieHandler({ type, message }: LottieHandlerProps) {
  const animation = animationMap[type];

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <Lottie
        animationData={animation}
        loop={type === "loading"} 
        style={{ width:300, height: 300, margin: "0 auto" }}
      />
      {message && (
        <p style={{ marginTop: "1rem", fontSize: "1.1rem", color: "#555" }}>
          {message}
        </p>
      )}
    </div>
  );
}