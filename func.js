


/////////////////////////////////////////////

function addListItem(item) {
  listItems.push(item)
  renderArray(listItems);
}

function removeListItem(index) {
  listItems.splice(index, 1)
  renderArray(listItems);
}

function shiftUpItem(index) {
  if(!index) {
    return null;
  } else {
    var temp = listItems.splice(index, 1)
    listItems.splice(index-1, 0, temp[0])
    renderArray(listItems);
  }
}

function shiftDownItem(index) {
  if(index >= listItems.length -1) {
    return null;
  } else {
    var temp = listItems.splice(index, 1)
    listItems.splice(index+1, 0, temp[0])
    renderArray(listItems);
  }
}

function completeItem(index) {
  listItems[index].completed = !listItems[index].completed;
  console.log(listItems[index].completed)
  renderArray(listItems);
}

function renderArray() {
  $('tbody').remove();
  $('table').append('<tbody></tbody>')
  listItems.map(function(listItem, index){
    return (
      `<tr id="row_${index}">
        <td>${index}</td>
        <td class=${listItem.completed ? "completed" : ""}>${listItem.item_value}</td>
        <td>
          <button id="btn_complete_${index}" class="btn btn-success">Completed</button>
          <button id="btn_shift_up_${index}" type="button" class="btn btn-primary">
            Shift <span class="glyphicon glyphicon-menu-up"></span>
          </button>
          <button id="btn_shift_down_${index}" type="button" class="btn btn-primary">
            Shift <span class="glyphicon glyphicon-menu-down"></span>
          </button>
          <button id="btn_delete_${index}" class="btn btn-danger">Delete</button>
        </td>
      </tr>`
    )
  }).forEach(function(item, index){
        $('tbody').append(item);
        $(`#btn_delete_${index}`).on('click', function(e){
          console.log('delete has been clicked')
          removeListItem(index);
        })
        $(`#btn_shift_up_${index}`).on('click', function(e){
          shiftUpItem(index);
        })
        $(`#btn_shift_down_${index}`).on('click', function(e){
          shiftDownItem(index);
        })
        $(`#btn_complete_${index}`).on('click', function(e){
          completeItem(index);
        })
    })
}
module.exports = addListItem