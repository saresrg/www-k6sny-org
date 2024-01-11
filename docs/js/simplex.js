function simplexInfo(today) {
  const channels = [
    [3, "TAC-A", 147.405],
    [4, "TAC-B", 146.415],
    [5, "TAC-C", 147.585],
    [6, "TAC-D", 446.0],
    [7, "TAC-E", 446.5],
  ];
  // Month name
  let span = document.getElementById("this_month");
  span.innerText = today.toLocaleString("default", { month: "long" });
  // Get channel data
  const year_offset = today.getFullYear() - 2024;
  if (year_offset < 0) {
    span = document.getElementById("simplex_freq");
    span.innerText =
      "[Cannot determine simplex frequency. Check your computer's clock.]";
  } else {
    const month = today.getMonth();
    const array_offset = (year_offset * 12 + month + 3) % channels.length;
    const ch_info = channels[array_offset];
    // Print frequency and channel
    span = document.getElementById("channel_number");
    if (span) {
      span.innerText = ch_info[0];
    }
    span = document.getElementById("channel_name");
    if (span) {
      span.innerText = ch_info[1];
    }
    span = document.getElementById("frequency");
    if (span) {
      span.innerText = ch_info[2].toFixed(3);
    }
  }
}
