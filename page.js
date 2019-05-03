
  const newDropdown = $("<tr>");
  const newName = $("<th>" + train.name + "</th>");
  const newDest = $("<td>" + train.dest + "</td>");
  const newFirst = $("<td>" + train.first + "</td>");
  const newFreq = $("<td>" + train.freq + "</td>");
  const newMinsAway = $("<td>" + minsAway + "</td>");
  const newNextTrain = $("<td>" + moment(nextTrain).format("hh:mm") + "</td></tr>");

  newRow.append(newName)
  newRow.append(newDest)
  newRow.append(newFirst)
  newRow.append(newFreq)
  newRow.append(newMinsAway)
  newRow.append(newNextTrain)
  $("#timeTable").append(newRow)