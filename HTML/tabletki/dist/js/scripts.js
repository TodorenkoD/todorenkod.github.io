"use strict";$(document).on("click",".number-spinner button",function(){var n=$(this),t=n.closest(".number-spinner").find("input").val().trim(),e=0;e="up"==n.attr("data-dir")?parseInt(t)+1:1<t?parseInt(t)-1:1,n.closest(".number-spinner").find("input").val(e)}),$(document).ready(function(){$('[data-toggle="popover"]').popover()});