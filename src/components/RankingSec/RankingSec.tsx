import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/ui/Tabs/tabs";
import React from "react";
import ClanRankingTable from "./ClanRankingTable";

export default function RankingSec() {
  return (
    <div className="cmn_gap">
      <div className="container">
        <div className="text-center mb-8">
          <h2>New Features Every Patch</h2>
          <p>Stay Ahead with the Latest Updates and Enhancements</p>
        </div>
        <Tabs defaultValue="clan" className="">
          <TabsList className="grid w-full max-w-[600px] mx-auto grid-cols-3 ">
            <TabsTrigger value="clan">Clan</TabsTrigger>
            <TabsTrigger value="arena">Arena</TabsTrigger>
            <TabsTrigger value="pvp">PVP</TabsTrigger>
          </TabsList>
          <TabsContent value="clan">
            <ClanRankingTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
