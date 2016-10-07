window.addEventListener("load",function(){
	var botonTexto = document.getElementById("texto");
	var botonCita = document.getElementById("cita");
	var botonMeme = document.getElementById("memes");
	var botonNota = document.getElementById("notas");
	var contenedor = document.getElementById("lista");
	var box = document.getElementById("box");

	botonTexto.addEventListener("click",function(e){
		e.preventDefault();
		crearContenidoTexto();
	});
	botonCita.addEventListener("click",function(e){
		e.preventDefault();
		crearContenidoCita();
	});
	botonMeme.addEventListener("click",function(e){
		e.preventDefault();
		crearContenidoMeme();
	});
	botonNota.addEventListener("click",function(e){
		e.preventDefault();
		crearContenidoNota();
	});
	

	function crearContenidoTexto(){
		var inputTitulo = document.createElement("input");
		var textareaTexto = document.createElement("textarea");
		var botonPublicar = document.createElement("button");
		var botonEliminar = document.createElement("button");
		var contenedorTexto = document.createElement("div");

		inputTitulo.classList.add("inputTitulo");
		textareaTexto.classList.add("textareaTexto");
		botonPublicar.classList.add("botonPublicar");
		botonEliminar.classList.add("botonEliminar");
		contenedorTexto.classList.add("contenedorTexto");

		botonPublicar.textContent ="Publicar";
		botonEliminar.textContent ="Eliminar";

		textareaTexto.placeholder = "Publicando texto...";
		textareaTexto.rows = "6";
		inputTitulo.placeholder = "Título de texto ...";

		contenedorTexto.insertBefore(inputTitulo,contenedorTexto.childNodes[0]);
		contenedorTexto.insertBefore(textareaTexto,contenedorTexto.childNodes[1]);
		contenedorTexto.insertBefore(botonEliminar,contenedorTexto.childNodes[2]);
		contenedorTexto.insertBefore(botonPublicar,contenedorTexto.childNodes[3]);
        contenedor.appendChild(contenedorTexto);

        botonEliminar.addEventListener("click", function(){
        	this.parentElement.remove();
        });
        botonPublicar.addEventListener("click",function(){
        	crearPost(textareaTexto, inputTitulo);
        	textareaTexto.value = "";
        	inputTitulo.value = "";
			this.parentElement.remove();
        });
    }
	
	function crearContenidoCita(){
		//var cambiarDisplay = document.querySelector(".contenedorTexto");
		//cambiarDisplay.style.display = "none";
		var inputCita = document.createElement("input");
		var textareaCita = document.createElement("textarea");
		var botonPublicarCita = document.createElement("button");
		var botonEliminarCita = document.createElement("button");
		var contenedorCita = document.createElement("div");

		inputCita.classList.add("inputCita");
		textareaCita.classList.add("textareaTexto");
		botonPublicarCita.classList.add("botonPublicarCita");
		botonEliminarCita.classList.add("botonEliminarCita");
		contenedorCita.classList.add("contenedorCita");

		botonPublicarCita.textContent ="Publicar";
		botonEliminarCita.textContent ="Eliminar";

		textareaCita.placeholder = "Publicando cita...";
		textareaCita.rows = "6";
		inputCita.placeholder = "Autor...";

		contenedorCita.insertBefore(inputCita,contenedorCita.childNodes[0]);
		contenedorCita.insertBefore(textareaCita,contenedorCita.childNodes[1]);
		contenedorCita.insertBefore(botonEliminarCita,contenedorCita.childNodes[2]);
		contenedorCita.insertBefore(botonPublicarCita,contenedorCita.childNodes[3]);
        contenedor.appendChild(contenedorCita);

        botonEliminarCita.addEventListener("click", function(){
        	this.parentElement.remove();
        });
        botonPublicarCita.addEventListener("click",function(){
        	crearPostCita(textareaCita, inputCita);
        	textareaCita.value = "";
        	inputCita.value = "";
			this.parentElement.remove();
        });
	}
	function crearContenidoMeme(){
		var inputMeme = document.createElement("input");
		var textareaMeme = document.createElement("textarea");
		var botonPublicarMeme = document.createElement("button");
		var botonEliminarMeme = document.createElement("button");
		var contenedorMeme = document.createElement("div");

		inputMeme.classList.add("inputMeme");
		textareaMeme.classList.add("textareaTexto");
		botonPublicarMeme.classList.add("botonPublicarMeme");
		botonEliminarMeme.classList.add("botonEliminarMeme");
		contenedorMeme.classList.add("contenedorMeme");

		botonPublicarMeme.textContent ="Publicar";
		botonEliminarMeme.textContent ="Eliminar";

		textareaMeme.placeholder = "Publicando Meme...";
		textareaMeme.rows = "6";
		inputMeme.placeholder = "Link de Meme...";

		contenedorMeme.insertBefore(inputMeme,contenedorMeme.childNodes[0]);
		contenedorMeme.insertBefore(textareaMeme,contenedorMeme.childNodes[1]);
		contenedorMeme.insertBefore(botonEliminarMeme,contenedorMeme.childNodes[2]);
		contenedorMeme.insertBefore(botonPublicarMeme,contenedorMeme.childNodes[3]);
        contenedor.appendChild(contenedorMeme);

        botonEliminarMeme.addEventListener("click", function(){
        	this.parentElement.remove();
        });
         botonPublicarMeme.addEventListener("click",function(){
        	crearPostMeme(textareaMeme, inputMeme);
        	
        });
	}
	function crearContenidoNota(){
		var inputNota = document.createElement("input");
		var textareaNota = document.createElement("textarea");
		var botonPublicarNota = document.createElement("button");
		var botonEliminarNota = document.createElement("button");
		var botonCambiarColor = document.createElement("button");
		var contenedorNota = document.createElement("div");

		inputNota.classList.add("inputNota");
		textareaNota.classList.add("textareaTexto");
		botonPublicarNota.classList.add("botonPublicarNota");
		botonEliminarNota.classList.add("botonEliminarNota");
		botonCambiarColor.classList.add("botonCambiarColor");
		contenedorNota.classList.add("contenedorNota");

		botonPublicarNota.textContent ="Publicar";
		botonEliminarNota.textContent ="Eliminar";
		botonCambiarColor.textContent ="Cambiar Color";

		textareaNota.placeholder = "Publicando Nota...";
		textareaNota.rows = "6";
		inputNota.placeholder = "Título de Nota...";

		contenedorNota.insertBefore(inputNota,contenedorNota.childNodes[0]);
		contenedorNota.insertBefore(textareaNota,contenedorNota.childNodes[1]);
		contenedorNota.insertBefore(botonEliminarNota,contenedorNota.childNodes[2]);
		contenedorNota.insertBefore(botonCambiarColor,contenedorNota.childNodes[3]);
		contenedorNota.insertBefore(botonPublicarNota,contenedorNota.childNodes[4]);
        contenedor.appendChild(contenedorNota);

        botonEliminarNota.addEventListener("click", function(){
        	this.parentElement.remove();
        });
	}
	function crearPost(textareaTexto, input){
		var postText = document.createElement("div");
		var tituloText = document.createElement("h2");
		var parrafoText = document.createElement("p");
		var botonEliminarPost = document.createElement("button")

		postText.classList.add("postText");
		tituloText.classList.add("tituloText");
		parrafoText.classList.add("parrafoText");
		botonEliminarPost.classList.add("botonEliminarPost");

		botonEliminarPost.textContent ="Eliminar";

		box.insertBefore(postText,box.childNodes[0]);
		postText.insertBefore(tituloText,postText.childNodes[1]);
		postText.insertBefore(parrafoText,postText.childNodes[2]);
		postText.insertBefore(botonEliminarPost,postText.childNodes[3]);

		tituloText.innerText = input.value;
		parrafoText.innerText = textareaTexto.value;

		botonEliminarPost.addEventListener("click", function(){
        	this.parentElement.remove();
        });

	}
	function crearPostMeme(){
		var postMeme = document.createElement("div");
		var linkMeme = document.createElement("input");
		var parrafoMeme = document.createElement("img");
		var botonEliminarPost = document.createElement("button")
		var contenedorMeme = document.createElement("div");

		parrafoMeme.setAttribute("src",linkMeme.value);
		postMeme.classList.add("postMeme");
		linkMeme.classList.add("linkMeme");
		parrafoMeme.classList.add("parrafoMeme");
		botonEliminarPost.classList.add("botonEliminarPost");
		botonEliminarPost.textContent ="Eliminar";

		box.insertBefore(postMeme,box.childNodes[0]);
		postMeme.insertBefore(linkMeme,postMeme.childNodes[1]);
		postMeme.insertBefore(parrafoMeme,postMeme.childNodes[2]);
		postMeme.insertBefore(botonEliminarPost,postMeme.childNodes[3]);
		contenedorMeme.appendChild(postMeme);

		botonEliminarPost.addEventListener("click", function(){
        	this.parentElement.remove();
        });
}
	function crearPostCita(textareaCita, inputCita){
		var postCita = document.createElement("div");
		var tituloCita = document.createElement("h2");
		var parrafoCita = document.createElement("p");
		var botonEliminarPost = document.createElement("button")

		postCita.classList.add("postCita");
		tituloCita.classList.add("tituloCita");
		parrafoCita.classList.add("parrafoCita");
		botonEliminarPost.classList.add("botonEliminarPost");

		botonEliminarPost.textContent ="Eliminar";

		box.insertBefore(postCita,box.childNodes[0]);
		postCita.insertBefore(tituloCita,postCita.childNodes[1]);
		postCita.insertBefore(parrafoCita,postCita.childNodes[2]);
		postCita.insertBefore(botonEliminarPost,postCita.childNodes[3]);

		tituloCita.innerText = inputCita.value;
		parrafoCita.innerText = textareaCita.value;

		botonEliminarPost.addEventListener("click", function(){
        	this.parentElement.remove();
        });

	}
});


