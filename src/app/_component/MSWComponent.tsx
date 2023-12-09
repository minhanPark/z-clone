"use client";

import { useEffect } from "react";

/**
 * 윈도우 타입을 확인하는게 추가되었다고 하는데 해당 부분은 서버 컴포넌트, 클라이언트 컴포넌트에 대한 부분때문에 추가된 것같다.
 * env에 값은 next public만 사용할 수 있으면 어떤 값으로 하든 상관 없는것 같다.
 * require만 하면 되는 건지? 다른 예시를 보면 Worker를 불러와서 start 해주던데
 * 아래 부분 코드 확인 필요
 */

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);
  return null;
};
