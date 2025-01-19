"use client";

import { Button } from "@/lib/ui/Button/button";
import styles from '@/styles/Table.module.scss';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/ui/Table/table";
import { useState } from "react";

export default function ClanRankingTable() {
  const headers = [
    "Rank",
    "ID",
    "Clan",
    "Clan Leader",
    "Reps",
    "Reps To Rank Up",
    "Reps To Rank 1",
  ];

  const dummyData = Array.from({ length: 100 }, (_, i) => ({
    rank: i + 1,
    id: `ID-${i + 1}`,
    clan: `Clan ${i + 1}`,
    clanLeader: `Leader ${i + 1}`,
    reps: 1000 - i * 10,
    repsToRankUp: 0,
    repsToRank1: 0,
  }));

  dummyData.forEach((row, index) => {
    if (index > 0) {
      row.repsToRankUp = dummyData[index - 1].reps - row.reps;
    } else {
      row.repsToRankUp = 0;
    }
    row.repsToRank1 = dummyData[0].reps - row.reps;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 25;
  const totalPages = Math.ceil(dummyData.length / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = dummyData.slice(indexOfFirstRow, indexOfLastRow);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div >
      <Table className={styles.table}>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.rank}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.clan}</TableCell>
              <TableCell>{row.clanLeader}</TableCell>
              <TableCell>{row.reps}</TableCell>
              <TableCell>{row.repsToRankUp}</TableCell>
              <TableCell>{row.repsToRank1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 flex justify-center gap-6">
        <Button
          variant="outline"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="self-center">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
