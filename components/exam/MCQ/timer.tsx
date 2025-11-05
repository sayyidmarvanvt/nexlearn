"use client";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import {useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Timer() {
  const exam = useSelector((state: RootState) => state.exam.data);
  const totalMinutes = exam?.total_time || 10;


  const [endTime, setEndTime] = useState<number | null>(null);

  useEffect(() => {
    if (!endTime && totalMinutes) {
      setEndTime(Date.now() + totalMinutes * 60 * 1000);
    }
  }, [totalMinutes, endTime]);

  if (!endTime) return <span>Loading...</span>;

  return (
    <Countdown
      date={endTime}
      intervalDelay={1000}
      precision={0}
      renderer={({ minutes, seconds, completed }) => {
        if (completed) {
          return (
            <span className="text-red-500 font-semibold whitespace-nowrap text-xs md:text-sm">
              Time’s Up
            </span>
          );
        }
        return (
          <span>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </span>
        );
      }}
    />
  );
}
