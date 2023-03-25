"use client";

export function LoginForm(): React.ReactElement {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch("/api/auth/login");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded shadow flex flex-col gap-y-4"
    >
      <div className="flex justify-between gap-x-4">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>

      <div className="flex justify-between gap-x-4">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
