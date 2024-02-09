const Login = () => {
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session?.user?.email} <br />
  //       <button
  //         className="dashApp__UI__utility__primary-button"
  //         onClick={() => signOut()}
  //       >
  //         Sign out
  //       </button>
  //     </>
  //   );

  return (
    <>
      Not signed in{" "}
      <button
        className="dashApp__UI__utility__primary-button"
        // onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
};

export default Login;
