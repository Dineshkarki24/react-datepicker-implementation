import ReactDatePicker from "react-datepicker";
import { useState } from "react";

function RangePicker() {
  const [dateRange, setdateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <div className="App">
      <ReactDatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setdateRange(update);
        }}
      />
    </div>
  );
}

export default RangePicker;
