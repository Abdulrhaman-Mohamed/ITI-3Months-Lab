$($("button")[0]).click(function (e) { 
    $("#add-to").prepend(`<li>
    <div class="input-group mb-3 w-100 ">
    <div class="input-group-text  border-0  form-check " style="background-color:black;">
      <input class="form-check-input  mt-1   bg-dark " type="checkbox" value="" aria-label="Checkbox for following text input">
    </div>
    <span >${$($("input")[0]).val()}</span>
    <span class="it active"><i class="fa-solid fa-trash"></i></span>
  </div>
</li>`);
$($("input")[0]).val("");  

$("#add-to li span.it").click(function() {
    $(this).closest('li').remove();
});

$('#add-to li input.form-check-input').change(function() {
    var parentLi = $(this).closest('li');
    parentLi.find('span.it').toggleClass('active', !this.checked);
});


});



