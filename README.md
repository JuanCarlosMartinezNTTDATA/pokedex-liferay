<h2>Setup</h2>
Liferay dxp-2025.q1.22-lts
JDK 21

He creado un portletMVC para hacer este ejercicio.
Es decir, es necesario tener liferay descargado, **clonar el repositorio y ejecutar el proyecto mediante un Liferay Server creado en IntelliJ**<br>
<img width="387" height="245" alt="image" src="https://github.com/user-attachments/assets/9bbce9c3-a9bd-46da-8426-b6f08f99e545" /><br>
<img width="1190" height="463" alt="image" src="https://github.com/user-attachments/assets/66d21474-2764-4ee7-ba9d-5d86f9436788" /><br><br>

**Ejecutar un deploy del módulo pokedex-portlet.**<br>
<img width="765" height="860" alt="image" src="https://github.com/user-attachments/assets/70b3cf4e-b095-4b26-815e-8fe37eabda49" /><br><br>

**Añadir el widget del portlet en el portal de liferay en localhost:8080. Para ello, debemos editar la página estando en la cuenta de administrador.**<br>
<img width="1372" height="194" alt="image" src="https://github.com/user-attachments/assets/17681fce-22ad-4585-9e34-fcf2f18f02cf" /><br><br>

**Luego hay que arrastrar el fragmento container a la página y por último, arrastrar el widget "Pokedex" de la sección de Widgets dentro del container**<br>
<img width="269" height="350" alt="image" src="https://github.com/user-attachments/assets/110a2f7a-a25d-41d6-b184-5b2808eb4202" /><br>
<img width="309" height="1032" alt="image" src="https://github.com/user-attachments/assets/97ffa40d-a224-4ab2-a45b-6d870fa3c0b6" /><br><br>


<h2>Decisiones técnicas</h2>
Como en un portlet no se puede navegar entre páginas reales, he simulado distintas pantallas gracias al uso de display block o none según mi conveniencia.
Para la paginación, implementé una variable paginaActual y calculé el offset a partir de ella, siguiendo ejemplos encontrados en internet.
Para sacar el ID del pokemon utilicé pokemon.url.split("/")[6] ya que la URL de la pokeAPI siempre tiene el mismo formato.

<h2>Limitaciones</h2>
El CSS del listado no se centra correctamente, he intentado centrarlo pero siempre se queda pegado a la izquierda.<br>
<img width="2522" height="446" alt="image" src="https://github.com/user-attachments/assets/af2f69e8-11f3-4ed2-bd0c-ed4348d2c59b" />
