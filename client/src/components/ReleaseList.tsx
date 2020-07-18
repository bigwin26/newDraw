import React, { useState, useCallback, useEffect } from "react";
import Section from "./Section";
import ListItem from "./ListItem";
import { shoesApi } from "../lib/api/shoes";
import Message from "./Message";

export default function ReleaseList() {
  const [fullList, setFullList] = useState<any>(null);
  const [error, setError] = useState("");

  const getList = useCallback(async (page: number) => {
    try {
      const {
        data: { shoes },
      } = await shoesApi.getList(page);
      setFullList(shoes);
    } catch (error) {
      setError("정보를 불러오는데 실패했습니다.");
    }
  }, []);

  useEffect(() => {
    getList(1);
  }, [getList]);

  return error ? (
    <Message color="red" text={error} />
  ) : (
    <Section>
      {fullList &&
        fullList.length > 0 &&
        fullList.map((shoes: any) => <ListItem shoes={shoes} />)}
    </Section>
  );
}
