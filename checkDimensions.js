function checkImageWidth(imgWidth) {
	
	var scaledWidth = 0;
	if(imgWidth >=8 && imgWidth <=16) {
		if(imgWidth <=12) {
			scaledWidth = 8;
		} else {
			scaledWidth = 16;
		}
	} else if(imgWidth >16 && imgWidth <=32) {
		if(imgWidth <=24) {
			scaledWidth = 16;
		} else {
			scaledWidth = 32;
		}
	} else if(imgWidth >32 && imgWidth <=64) {
		if(imgWidth <=48) {
			scaledWidth = 32;
		} else {
			scaledWidth = 64;
		}
	} else if(imgWidth >64 && imgWidth <=128) {
		if(imgWidth <=96) {
			scaledWidth = 64;
		} else {
			scaledWidth = 128;
		}
	} else if(imgWidth >128 && imgWidth <=256) {
		if(imgWidth <=192) {
			scaledWidth = 128;
		} else {
			scaledWidth = 256;
		}
	} else if(imgWidth >256 && imgWidth <=512) {
		if(imgWidth <=384) {
			scaledWidth = 256;
		} else {
			scaledWidth = 512;
		} 
	} else if(imgWidth >512 && imgWidth <=1024) {
		if(imgWidth <=768) {
			scaledWidth = 512;
		} else {
			scaledWidth = 1024;
		}
	} else if(imgWidth >1024 && imgWidth <=2048) {
		if(imgWidth <=1536) {
			scaledWidth = 1024;
		} else {
			scaledWidth = 2048;
		}
	} else if(imgWidth >2048 && imgWidth <=4096) {
		if(imgWidth <=3072) {
			scaledWidth = 2048;
		} else {
			scaledWidth = 4096;
		}
	}
	
	return scaledWidth;
}

function checkImageHeight(imgHeight) {
	
	var scaledHeight = 0;
	if(imgHeight >=8 && imgHeight <=16) {
		if(imgHeight <=12) {
			scaledHeight = 8;
		} else {
			scaledHeight = 16;
		}
	} else if(imgHeight >16 && imgHeight <=32) {
		if(imgHeight <=24) {
			scaledHeight = 16;
		} else {
			scaledHeight = 32;
		}
	} else if(imgHeight >32 && imgHeight <=64) {
		if(imgHeight <=48) {
			scaledHeight = 32;
		} else {
			scaledHeight = 64;
		}
	} else if(imgHeight >64 && imgHeight <=128) {
		if(imgHeight <=96) {
			scaledHeight = 64;
		} else {
			scaledHeight = 128;
		}
	} else if(imgHeight >128 && imgHeight <=256) {
		if(imgHeight <=192) {
			scaledHeight = 128;
		} else {
			scaledHeight = 256;
		}
	} else if(imgHeight >256 && imgHeight <=512) {
		if(imgHeight <=384) {
			scaledHeight = 256;
		} else {
			scaledHeight = 512;
		} 
	} else if(imgHeight >512 && imgHeight <=1024) {
		if(imgHeight <=768) {
			scaledHeight = 512;
		} else {
			scaledHeight = 1024;
		}
	} else if(imgHeight >1024 && imgHeight <=2048) {
		if(imgHeight <=1536) {
			scaledHeight = 1024;
		} else {
			scaledHeight = 2048;
		}
	} else if(imgHeight >2048 && imgHeight <=4096) {
		if(imgHeight <=3072) {
			scaledHeight = 2048;
		} else {
			scaledHeight = 4096;
		}
	}
	
	return scaledHeight;
}