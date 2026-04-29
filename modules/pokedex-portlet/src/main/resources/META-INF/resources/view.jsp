<%@ include file="/init.jsp" %>

<div id="pokedex-loading">Cargando...</div>

<div id="pokedex-error" style="display:none">
    <p>Ha ocurrido un error</p>
    <button id="error">Reintentar</button>
</div>

<div id="pokedex-card" style="display:none"></div>

<div id="pokedex-pagination" style="display:none">
    <button id="anterior">Anterior</button>
    <button id="siguiente">Siguiente</button>
</div>

<div id="pokedex-detail" style="display:none">
    <button id="volver">Volver</button>
    <div id="detail-content"></div>
</div>

<script src="<%=request.getContextPath()%>/js/main.js"></script>