import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import RangePicker from "./RangePicker";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="App">
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy/MM/dd"
        // minDate={new Date()}
        maxDate={new Date()}
        placeholderText="Select Date"
        disabled
      />
      <h6>Range Picker</h6>
      <RangePicker />
    </div>
  );
}

export default App;
