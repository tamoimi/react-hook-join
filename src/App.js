import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);
  const [isFullInput, setIsFullInput] = useState(false);

  return (
    <>
      <div className="react-hook-container">
        <h1>회원가입</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">사용자 이름</label>
          <input
            type="text"
            {...register("username", {
              required: "이름은 필수 값입니다.",
              minLength: {
                value: 2,
                message: "이름은 2자 이상 입력해주세요.",
              },
            })}
            placeholder="이름을 입력해주세요."
          />
          {errors.username && (
            <p style={{ color: "red", fontSize: "10px" }}>
              {errors.username.message}
            </p>
          )}

          <label htmlFor="id">아이디</label>
          <input
            type="text"
            {...register("id")}
            placeholder="아이디를 입력해주세요."
          />

          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            {...register("password", {
              required: "비밀번호는 필수 값입니다.",
              pattern: {
                value: /^[a-zA-Z]*$/,
                message: "비밀번호는 영어만 가능합니다.",
              },
              minLength: {
                value: 6,
                message: "비밀번호는 6자 이상 입력해주세요.",
              },
              maxLength: {
                value: 12,
                message: "비밀번호는 12자 이하로 입력해주세요.",
              },
            })}
            placeholder="비밀번호를 입력해주세요."
          />
          {errors.password && (
            <span>비밀번호는 6자 12자 이하로 입력하세요.</span>
          )}

          {isFullInput ? (
            <input
              type="submit"
              className="submit"
              style={{ background: "orange" }}
            />
          ) : (
            <input type="submit" className="submit" />
          )}
        </form>
      </div>
    </>
  );
}
// 비밀번호 매치 읽어보고 적용하기
// https://codesandbox.io/s/react-hook-form-password-match-check-standard-validation-eo6en?file=/src/index.js:344-353

export default App;
