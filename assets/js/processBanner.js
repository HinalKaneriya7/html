const typedTextSpan=document.querySelector(".typed-text"),cursorSpan=document.querySelector(".cursor"),textArray=["Simple","Powerful","Creative"],typingDelay=200,erasingDelay=100,newTextDelay=2e3;let textArrayIndex=0,charIndex=0;function type(){charIndex<textArray[textArrayIndex].length?(cursorSpan.classList.contains("typing")||cursorSpan.classList.add("typing"),typedTextSpan.textContent+=textArray[textArrayIndex].charAt(charIndex),charIndex++,setTimeout(type,200)):(cursorSpan.classList.remove("typing"),setTimeout(erase,2e3))}function erase(){charIndex>0?(cursorSpan.classList.contains("typing")||cursorSpan.classList.add("typing"),typedTextSpan.textContent=textArray[textArrayIndex].substring(0,charIndex-1),charIndex--,setTimeout(erase,100)):(cursorSpan.classList.remove("typing"),textArrayIndex++,textArrayIndex>=textArray.length&&(textArrayIndex=0),setTimeout(type,1300))}document.addEventListener("DOMContentLoaded",(function(){textArray.length&&setTimeout(type,2250)}));