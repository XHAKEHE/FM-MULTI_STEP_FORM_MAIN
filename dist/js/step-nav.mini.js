"use strict";var navSteps,mainSteps,prevBtn,nextBtn,activeIndex,main=function(){prepareDOMElements(),prepareDOMEvents()},prepareDOMElements=function(){navSteps=document.querySelectorAll("nav .step button"),mainSteps=[document.querySelector("main .step-1"),document.querySelector("main .step-2"),document.querySelector("main .step-3"),document.querySelector("main .step-4")],prevBtn=document.querySelector(".prev-step"),nextBtn=document.querySelector(".next-step")},prepareDOMEvents=function(){navSteps.forEach(function(e){return e.addEventListener("click",navStepSelect)}),nextBtn.addEventListener("click",stepNext),prevBtn.addEventListener("click",stepPrev)},test=function(){console.log(currentStep())},currentStep=function(){for(var e=0;e<navSteps.length;e++)if(navSteps[e].classList.contains("active"))return e},activateStep=function(e){navSteps.forEach(function(e){return e.classList.remove("active")}),navSteps[e].classList.add("active"),mainSteps.forEach(function(e){return e.classList.add("innactive")}),mainSteps[e].classList.remove("innactive"),0!=e?prevBtn.classList.remove("blank"):prevBtn.classList.add("blank"),nextBtn.textContent=3==e?"Confirm":"Next step"},stepNext=function(){currentStep()<3&&activateStep(currentStep()+1)},stepPrev=function(){0<currentStep()&&activateStep(currentStep()-1)},navStepSelect=function(e){activateStep(e.target.textContent-1)};document.addEventListener("DOMContentLoaded",function(){main(),test(),currentStep()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtbmF2LmpzIl0sIm5hbWVzIjpbIm5hdlN0ZXBzIiwibWFpblN0ZXBzIiwibmV4dEJ0biIsIm1haW4iLCJwcmVwYXJlRE9NRWxlbWVudHMiLCJwcmVwYXJlRE9NRXZlbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJwcmV2QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlc3QiLCJzdGVwIiwibmF2U3RlcFNlbGVjdCIsInN0ZXBOZXh0Iiwic3RlcFByZXYiLCJjb25zb2xlIiwibG9nIiwiaSIsImN1cnJlbnRTdGVwIiwiYWN0aXZhdGVTdGVwIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJmb3J3YXJkIiwibmF2U3RlcCIsInJlbW92ZSIsImFkZCIsIm1haW5TdGVwIiwidGV4dENvbnRlbnQiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiYUFBQSxJQUFJQSxTQUNBQyxVQURBRCxRQUNBQyxRQUVBQyxZQUlFQyxLQUFPLFdBQ1pDLG1CQUFrQixFQUNsQkMsaUJBQWdCLENBQ2pCLEVBR0NMLG1CQUFvQk0sV0FBcEJOLFNBQ1NPLFNBQ1JBLGlCQUF1QixrQkFDdkJBLEVBRkROLFVBTVVNLENBQ1ZMLFNBQU9NLGNBQVlBLGNBQWMsRUFDakNELFNBQUFDLGNBQUEsY0FBQSxFQUVERCxTQUFNRixjQUFtQixjQUFuQkEsRUFDTEwsU0FBU1MsY0FBUSxjQUFJLEdBTHJCQyxRQUt1RUgsU0FBQUMsY0FBQSxZQUFBLEVBSnZFTixRQUtRUyxTQUFBQSxjQUF3QixZQUFXLENBSjVDLEVBUU1DLGlCQUFJLFdBTFRaLFNBTUFTLFFBQUEsU0FBQUksR0FBQSxPQUFBQSxFQUFBRixpQkFBQSxRQUFBRyxhQUFBLENBQUEsQ0FBQSxFQUxBWixRQU1PUyxpQkFBaUIsUUFBRUksUUFBQSxFQUMxQkwsUUFBQUMsaUJBQUEsUUFBQUssUUFBQSxDQUVELEVBRUVKLEtBQUlaLFdBTExpQixRQU9FQyxJQUFPQyxZQUFDLENBQUEsQ0FOWCxFQVNDQyxZQUFBLFdBRUQsSUFBTUMsSUFBQUEsRUFBQUEsRUFBWUYsRUFBR25CLFNBQWZxQixPQUFBQSxDQUFBQSxHQUNMckIsR0FBQUEsU0FBU1MsR0FBT2EsVUFBQ0MsU0FBTyxRQUFBLEVBQXNDLE9BQUNKLENBSGhFLEVBTUNsQixhQUFtQnFCLFNBQUFBLEdBSG5CdEIsU0FLSXdCLFFBQVksU0FBQUMsR0FBRSxPQUFBQSxFQUFBSCxVQUFBSSxPQUFBLFFBQUEsQ0FBQSxDQUFBLEVBSmxCMUIsU0FLQ1UsR0FBUVksVUFBaUJLLElBQUEsUUFBUSxFQUpsQzFCLFVBS09RLFFBQUEsU0FBQW1CLEdBQUEsT0FBQUEsRUFBQU4sVUFBQUssSUFBQSxXQUFBLENBQUEsQ0FBQSxFQUpQMUIsVUFLUXVCLEdBQUNGLFVBQWNJLE9BQVEsV0FBQSxFQUdwQixHQUFYRixFQUxDZCxRQU1BUixVQUFRMkIsT0FBYyxPQUFBLEVBSnRCbkIsUUFNQVIsVUFBUTJCLElBQVcsT0FBRyxFQUt2QjNCLFFBQUlrQixZQURZLEdBQVhMLEVBQ2dCLFVBRXJCLFdBRUQsRUFFRU0sU0FBYUQsV0FDZEEsWUFBQSxFQUFBLEdBQ0FDLGFBQUFELFlBQUEsRUFBQSxDQUFBLENBTEQsRUFTQ0osU0FBQSxXQUVRTCxFQUFUSixZQUFTSSxHQUNSUixhQUFNaUIsWUFBQSxFQUFBLENBQUEsQ0FQUCxFQUVNTixjQUFnQixTQUFBZ0IsR0FDckJULGFBQWFTLEVBQUVDLE9BQU9GLFlBQWMsQ0FBQyxDQUN0QyxFQUVBdEIsU0FBU0ksaUJBQWlCLG1CQUFvQixXQUM3Q1IsS0FBSyxFQUNMUyxLQUFLLEVBQ0xRLFlBQVksQ0FDYixDQUFDIiwiZmlsZSI6InN0ZXAtbmF2Lm1pbmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbmF2U3RlcHNcclxubGV0IG1haW5TdGVwc1xyXG5sZXQgcHJldkJ0blxyXG5sZXQgbmV4dEJ0blxyXG5cclxubGV0IGFjdGl2ZUluZGV4XHJcblxyXG5jb25zdCBtYWluID0gKCkgPT4ge1xyXG5cdHByZXBhcmVET01FbGVtZW50cygpXHJcblx0cHJlcGFyZURPTUV2ZW50cygpXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVET01FbGVtZW50cyA9ICgpID0+IHtcclxuXHRuYXZTdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiAuc3RlcCBidXR0b24nKVxyXG5cdG1haW5TdGVwcyA9IFtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gLnN0ZXAtMScpLFxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiAuc3RlcC0yJyksXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIC5zdGVwLTMnKSxcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gLnN0ZXAtNCcpLFxyXG5cdF1cclxuXHRwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXYtc3RlcCcpXHJcblx0bmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LXN0ZXAnKVxyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlRE9NRXZlbnRzID0gKCkgPT4ge1xyXG5cdG5hdlN0ZXBzLmZvckVhY2goc3RlcCA9PiBzdGVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2U3RlcFNlbGVjdCkpXHJcblx0bmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0ZXBOZXh0KVxyXG5cdHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGVwUHJldilcclxufVxyXG5cclxuY29uc3QgdGVzdCA9ICgpID0+IHtcclxuXHQvLyBjb25zb2xlLmxvZyhuYXZTdGVwcylcclxuXHRjb25zb2xlLmxvZyhjdXJyZW50U3RlcCgpKVxyXG59XHJcblxyXG5jb25zdCBjdXJyZW50U3RlcCA9ICgpID0+IHtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5hdlN0ZXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAobmF2U3RlcHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhpKVxyXG5cdFx0XHRyZXR1cm4gaVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgYWN0aXZhdGVTdGVwID0gZm9yd2FyZCA9PiB7XHJcblx0bmF2U3RlcHMuZm9yRWFjaChuYXZTdGVwID0+IG5hdlN0ZXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXHJcblx0bmF2U3RlcHNbZm9yd2FyZF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHRtYWluU3RlcHMuZm9yRWFjaChtYWluU3RlcCA9PiBtYWluU3RlcC5jbGFzc0xpc3QuYWRkKCdpbm5hY3RpdmUnKSlcclxuXHRtYWluU3RlcHNbZm9yd2FyZF0uY2xhc3NMaXN0LnJlbW92ZSgnaW5uYWN0aXZlJylcclxuXHJcblx0aWYgKGZvcndhcmQgIT0gMCkge1xyXG5cdFx0cHJldkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdibGFuaycpXHJcblx0fSBlbHNlIHtcclxuXHRcdHByZXZCdG4uY2xhc3NMaXN0LmFkZCgnYmxhbmsnKVxyXG5cdH1cclxuXHJcblx0aWYgKGZvcndhcmQgPT0gMykge1xyXG5cdFx0bmV4dEJ0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJ1xyXG5cdH0gZWxzZSB7XHJcblx0XHRuZXh0QnRuLnRleHRDb250ZW50ID0gJ05leHQgc3RlcCdcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0ZXBOZXh0ID0gKCkgPT4ge1xyXG5cdGlmIChjdXJyZW50U3RlcCgpIDwgMykge1xyXG5cdFx0YWN0aXZhdGVTdGVwKGN1cnJlbnRTdGVwKCkgKyAxKVxyXG5cdH1cclxufVxyXG5jb25zdCBzdGVwUHJldiA9ICgpID0+IHtcclxuXHRpZiAoY3VycmVudFN0ZXAoKSA+IDApIHtcclxuXHRcdGFjdGl2YXRlU3RlcChjdXJyZW50U3RlcCgpIC0gMSlcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG5hdlN0ZXBTZWxlY3QgPSBlID0+IHtcclxuXHRhY3RpdmF0ZVN0ZXAoZS50YXJnZXQudGV4dENvbnRlbnQgLSAxKVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cdG1haW4oKVxyXG5cdHRlc3QoKVxyXG5cdGN1cnJlbnRTdGVwKClcclxufSlcclxuIl19
