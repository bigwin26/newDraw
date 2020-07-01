test("Date comparison", () => {
  const d2 = new Date(`2020-07-02 10:00:00.0`).toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
  });
  const d1 = new Date().toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
  });
  expect(d1 < d2).toBe(true);
});
