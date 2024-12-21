"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { useContext, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReportContext } from "../(pages)/home/page";
function UploadReport() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [report, setReport] = useState();

  const { currentReport, setCurrentReport } = useContext(ReportContext);
  

  const handleSubmit = async () => {
    const data = { name, date, report };
    console.log(data);
    await axios
      .post("http://localhost:8000/api/user/uploadReport", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (response) => {
        // handle the response
        setCurrentReport(response.data);
        setDate("")
        setName("")
        setReport("")
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });

    console.log(currentReport);
  };
  return (
    <Dialog>
      <DialogTrigger>Upload Report</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Report</DialogTitle>
          <DialogDescription>Enter details below.</DialogDescription>
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div>
            <Label className="block my-2" htmlFor="date">
              Date of Report
            </Label>
            {/* date picker */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
            <Label className="my-2" htmlFor="report">
              Report
            </Label>
            <Input
              className="mb-3"
              name="report"
              type="file"
              onChange={(e) => {
                setReport(e.target.files[0]);
              }}
            />
          </div>
          <Button onClick={handleSubmit} className="w-1/4 m-auto">
            Submit
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default UploadReport;
