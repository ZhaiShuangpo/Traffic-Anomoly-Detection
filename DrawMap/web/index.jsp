<%--
  Created by IntelliJ IDEA.
  User: zjutvis
  Date: 2016/11/11
  Time: 20:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link href="CSSLIB/leaflet.css" rel="stylesheet" type="text/css"/>
    <link href="CSS/index.css" rel="stylesheet" type="text/css"/>
    <script src="JSLIB/heatmap/heatmap.min.js"></script>
    <script src="JSLIB/leaflet/leaflet.js"></script>
    <script src="JSLIB/leaflet/leaflet-heatmap.js"></script>

    <script src="JSLIB/d3/d3.min.js"></script>
    <script src="JSLIB/jquery-2.1.4/jquery.min.js"></script>
</head>
<body>
<div class="container">
    <div class="DrawMap" id="map">
        <p>地图</p>
    </div>
    <div class="controller">
        <div class="selection">
            <p>选择器</p>
        </div>
        <div class="collision">
            <p>碰撞</p>
        </div>
    </div>
    <div class="statistics">
        <p>统计器</p>
    </div>
</div>
<%--<script src="JS/marker.js"></script>--%>
<script src="JS/heatmap.js"></script>
</body>
</html>