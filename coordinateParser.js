function handleFileSelectOLD(evt) {
	fileDisplayArea.innerText = "";
	var files = evt.target.files[0];
	var fileType = /.x3d./;
	var xml = "";
	if (files.type.match(fileType)) {
		var reader = new FileReader();

		reader.onload = function(e) {
			xml = parseXml(reader.result);
			var mater = xml.getElementsByTagName('Material');
			var coords = xml.getElementsByTagName('Coordinate');
			var normals = xml.getElementsByTagName('Normal');
			colorFromX = mater[0].getAttribute('diffuseColor');
			colorFromX = colorFromX.replace(/ /g, ",");
			colorFromX = colorFromX.replace(/\.0/g, "");
			coordFromX = coords[0].getAttribute('point');
			coordFromX = coordFromX.replace(/ |, /g, ",");
			normFromX = normals[0].getAttribute('vector');
			normFromX = normFromX.replace(/ |, /g, ",");
			webGLStart();
		}

		reader.readAsText(files);
	} else {
		fileDisplayArea.innerText = "File not supported!"
	}
}
	
var parseXml;

if (typeof window.DOMParser != "undefined") {
	parseXml = function(xmlStr) {
		return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
	};
} else if (typeof window.ActiveXObject != "undefined" &&
	   new window.ActiveXObject("Microsoft.XMLDOM")) {
	parseXml = function(xmlStr) {
		var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = "false";
		xmlDoc.loadXML(xmlStr);
		return xmlDoc;
	};
} else {
	throw new Error("No XML parser found");
}

function getCoordinates(xmlDocu) {
	var indexes = xmlDocu.getElementsByTagName('IndexedFaceSet')[0].getAttribute('coordIndex');
	indexes = indexes.split(" ");
	var coords = [];
	coords = xmlDocu.getElementsByTagName('Coordinate')[0].getAttribute('point');
	coords = coords.split(" ");
	//alert("Indexes: "+indexes+" "+indexes.length);
	//alert("Coords: "+coords+" "+coords.length);
	var counter = 0;
	var fullCoords = [];
	for (var i in indexes) {
		var indexNum = indexes[i];
		counter++;
		if(indexNum != -1) {
			for (var j = 0 ; j<3; j++ ) {
				fullCoords.push(coords[3*indexNum+j]);
			}
		}
	}
	//alert("FullCoords: " +fullCoords);
	return fullCoords;
}
function getIndexes () {
	var indexes = [0, 1, 2, -1, 0, 2, 3, -1, 1, 0, 4, -1, 0, 3, 4, -1, 3, 2, 4, -1, 2, 1, 4, -1];
	for (var i in indexes) {
		if (indexes[i] == -1) {
			indexes.splice(i,1);
		}
	}
	//alert("GetIndexes: "+indexes + " " + indexes.length);
	return indexes;
}

function getNormals(xml) {
	var indexes = xml.getElementsByTagName('IndexedFaceSet')[0].getAttribute('coordIndex');
	indexes = indexes.split(" ");
	var coords = [];
	coords = xml.getElementsByTagName('Coordinate')[0].getAttribute('point');
	coords = coords.split(" ");
	var counter = 0;
	var fullCoords = [];
	for (var i in indexes) {
		var indexNum = indexes[i];
		counter++;
		if(indexNum != -1) {
			for (var j = 0 ; j<3; j++ ) {
				fullCoords.push(coords[3*indexNum+j]);
			}
		}
	}
	 var normals = [];
	 var vector1 = vec3.create();
	 var vector2 = vec3.create();
	 var cross = vec3.create;
	 var normal = vec3.create();
	for (var i=0; i<fullCoords.length; i+=9) {
		vec3.set(vector1, fullCoords[i+6]-fullCoords[i], fullCoords[i+7]-fullCoords[i+1], fullCoords[i+8]-fullCoords[i+2]);
		vec3.set(vector2, fullCoords[i+3]-fullCoords[i], fullCoords[i+4]-fullCoords[i+1], fullCoords[i+5]-fullCoords[i+2]);
		/*alert(fullCoords[i+6]+" "+fullCoords[i]);
		alert(fullCoords[i+7]+" "+fullCoords[i+1]);
		alert(fullCoords[i+8]+" "+fullCoords[i+2]);
		alert(fullCoords[i+3]+" "+fullCoords[i]);
		alert(fullCoords[i+4]+" "+fullCoords[i+1]);
		alert(fullCoords[i+5]+" "+fullCoords[i+2]);
		alert("Vec1: "+vector1[0]+" "+vector1[1]+" "+vector1[2]);
		alert("Vec2: "+vector2[0]+" "+vector2[1]+" "+vector2[2]);*/
		vec3.cross(cross, vector1, vector2);
		vec3.normalize(normal, cross);
		normals.push(normal[0]);
		normals.push(normal[1]);
		normals.push(normal[2]);
		normals.push(normal[0]);
		normals.push(normal[1]);
		normals.push(normal[2]);
		normals.push(normal[0]);
		normals.push(normal[1]);
		normals.push(normal[2]);
	}
	return normals;
}
function getColor(xml) {
	
	var mater = xml.getElementsByTagName('Material');
	color = mater[0].getAttribute('diffuseColor');
	color = color.replace(/ /g, ",");
	color = color.replace(/\.0/g, "");
	//alert(color);
	return color;
}