//selecting all required elements


let gallery=document.querySelectorAll(".gallery img")

let previewBox=document.querySelector(".preview-box")

let closeIcon=document.querySelector(".icon")
let preboximg=document.querySelector(".pre-box-img")
let prev_btn=document.querySelector(".img-box .prev")
let next_btn=document.querySelector(".img-box .next")



//prev icon function



let imgnumber=document.querySelector(".current-img")
gallery.forEach((element,id)=>{
	
	element.addEventListener("click",(e)=>{
		
		
		
		if (previewBox.style.display=="none" | previewBox.style.display==""){
			
			previewBox.style.display="block"
			
			console.log("upore",e.target.src)
			
			imgnumber.innerHTML=id+1
			
			preboximg.setAttribute("src",e.target.src)
			new_index=id
			prev_btn.onclick=()=>{
				--new_index
				if(new_index<0){
					prev_btn.setAttribute("disabled","disabled")
					new_index=0
					
				}else{
					prev_btn.setAttribute("disabled","enabled")
					preboximg.setAttribute("src",gallery[new_index].src)
					imgnumber.innerHTML=new_index+1
					
				}
			}
			next_btn.onclick=()=>{
				++new_index
				if(new_index>gallery.length-1){
					next_btn.setAttribute("disabled","disabled")
					new_index=gallery.length-1
					
				}else{
					next_btn.setAttribute("disabled","enabled")
					preboximg.setAttribute("src",gallery[new_index].src)
					imgnumber.innerHTML=new_index+1
					
				}
			}
			
		
			}document.addEventListener("click",(e)=>{
				if (e.target.tagName!="IMG" & e.target.className!="preview-box" & e.target.className!="details" & e.target.className!="fas fa-angle-right" & e.target.className!="fas fa-angle-left" & e.target.className!="title" & e.target.className!="current-img" & e.target.className!="total-img" & e.target.className!="slide next" & e.target.className!="slide prev" ){
				previewBox.style.display="none"
				
				
				}
				})
		
	})

	
	
	

	
	
	
})



