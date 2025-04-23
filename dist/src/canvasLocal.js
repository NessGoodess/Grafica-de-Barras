export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 12;
        this.rHeight = 8;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 12;
        this.centerY = this.maxY / 8 * 7;
    }
    iX(x) { return Math.round(this.centerX + x / this.pixelSize); }
    iY(y) { return Math.round(this.centerY - y / this.pixelSize); }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
    drawRmboide(x1, y1, x2, y2, x3, y3, x4, y4, color) {
        // Color de relleno
        this.graphics.fillStyle = color;
        // Comenzamos la ruta de dibujo, o path
        this.graphics.beginPath();
        // Mover a la esquina superior izquierda
        this.graphics.moveTo(x1, y1);
        // Dibujar la línea hacia la derecha
        this.graphics.lineTo(x2, y2);
        // Ahora la que va hacia abajo
        this.graphics.lineTo(x3, y3); // A 80 porque esa es la altura
        // La que va hacia la izquierda
        this.graphics.lineTo(x4, y4);
        // Y dejamos que la última línea la dibuje JS
        this.graphics.closePath();
        // Hacemos que se dibuje
        this.graphics.stroke();
        // Lo rellenamos
        this.graphics.fill();
    }
    fx(x) {
        return Math.sin(x * 2.5);
    }
    maxH(h) {
        let max = h[0];
        for (let i = 1; i < h.length; i++) {
            if (max < h[i])
                max = h[i];
        }
        //
        let res;
        let pot = 10;
        //se calcula la potencia de 10 mayor al max para redondear el maximo de la grafica.
        while (pot < max) {
            pot *= 10;
        }
        pot /= 10;
        res = Math.ceil(max / pot) * pot;
        return res;
    }
    barra(x, y, alt, color) {
        this.graphics.strokeStyle = 'rgba(0, 0, 0, 0.05)';
        this.drawLine(this.iX(x), this.iY(0), this.iX(x - 0.5), this.iY(0.2));
        this.drawLine(this.iX(x - 0.5), this.iY(0.2), this.iX(x - 0.5), this.iY(y + alt));
        this.drawLine(this.iX(x - 0.5), this.iY(y + alt), this.iX(x), this.iY(y + alt - 0.2));
        this.drawLine(this.iX(x), this.iY(y + alt - 0.2), this.iX(x + 0.5), this.iY(y + alt));
        this.drawLine(this.iX(x + 0.5), this.iY(y + alt), this.iX(x + 0.5), this.iY(0.2));
        this.drawLine(this.iX(x + 0.5), this.iY(0.2), this.iX(x), this.iY(0));
        this.drawLine(this.iX(x), this.iY(0), this.iX(x), this.iY(y + alt - 0.2));
        this.graphics.strokeStyle = 'rgba(0, 0, 0, 0.05)';
        this.drawLine(this.iX(x - 0.5), this.iY(y + alt), this.iX(x - 0.5), this.iY(this.rHeight - 2));
        this.drawLine(this.iX(x), this.iY(y + alt - 0.2), this.iX(x), this.iY(this.rHeight - 2.2));
        this.drawLine(this.iX(x + 0.5), this.iY(y + alt), this.iX(x + 0.5), this.iY(this.rHeight - 2));
        this.drawLine(this.iX(x - 0.5), this.iY(this.rHeight - 2), this.iX(x), this.iY(this.rHeight - 1.8));
        this.drawLine(this.iX(x + 0.5), this.iY(this.rHeight - 2), this.iX(x), this.iY(this.rHeight - 1.8));
        this.drawLine(this.iX(x - 0.5), this.iY(this.rHeight - 2), this.iX(x), this.iY(this.rHeight - 2.2));
        this.drawLine(this.iX(x + 0.5), this.iY(this.rHeight - 2), this.iX(x), this.iY(this.rHeight - 2.2));
        this.graphics.strokeStyle = 'black';
        // color de relleno
        this.graphics.fillStyle = color;
        this.graphics.beginPath();
        this.graphics.moveTo(this.iX(x), this.iY(0));
        this.graphics.lineTo(this.iX(x - 0.5), this.iY(0.2));
        this.graphics.lineTo(this.iX(x - 0.5), this.iY(y + alt));
        this.graphics.lineTo(this.iX(x), this.iY(y + alt - 0.2));
        this.graphics.lineTo(this.iX(x + 0.5), this.iY(y + alt));
        this.graphics.lineTo(this.iX(x + 0.5), this.iY(0.2));
        this.graphics.closePath();
        this.graphics.fill();
        //sombreado techo
        this.graphics.fillStyle = 'rgba(0, 0, 0, 0.15)';
        this.graphics.beginPath();
        this.graphics.moveTo(this.iX(x), this.iY(this.rHeight - 1.8));
        this.graphics.lineTo(this.iX(x - 0.5), this.iY(this.rHeight - 2));
        this.graphics.lineTo(this.iX(x), this.iY(this.rHeight - 2.2));
        this.graphics.lineTo(this.iX(x + 0.5), this.iY(this.rHeight - 2));
        this.graphics.closePath();
        this.graphics.fill();
        // sombreado arriba
        this.graphics.fillStyle = 'rgba(0, 0, 0, 0.2)';
        this.graphics.beginPath();
        this.graphics.moveTo(this.iX(x), this.iY(this.rHeight - 2.2));
        this.graphics.lineTo(this.iX(x - 0.5), this.iY(this.rHeight - 2));
        this.graphics.lineTo(this.iX(x - 0.5), this.iY(y + alt));
        this.graphics.lineTo(this.iX(x), this.iY(y + alt - 0.2));
        this.graphics.closePath();
        this.graphics.fill();
        // sombreado abajo
        this.graphics.fillStyle = 'rgba(0, 0, 0, 0.3)';
        this.graphics.beginPath();
        this.graphics.moveTo(this.iX(x), this.iY(y + alt - 0.2));
        this.graphics.lineTo(this.iX(x - 0.5), this.iY(y + alt));
        this.graphics.lineTo(this.iX(x - 0.5), this.iY(0.2));
        this.graphics.lineTo(this.iX(x), this.iY(0));
        this.graphics.closePath();
        this.graphics.fill();
    }
    paint() {
        //let h: number[] = [20, 100, 160, 420];
        //let h: number[] = [1150, 1780, 860, 1260, 1500];
        let porcent = [10, 30, 80, 50];
        //let maxEsc: number;
        let colors = ['deepSkyBlue', 'limeGreen', 'deepPink', 'orange'];
        /*maxEsc = this.maxH(h);
        let i=0;
        for(let x= 0; x < 8; x+=(8/(h.length*1)) ){
          this.graphics.strokeStyle = colors[i%4];
          if(i<h.length)
            this.barra(x,0, h[i++]*(this.rHeight-2)/maxEsc);
        }
        i=0;
        for (let x = 0; x < 8; x += (8/(h.length*1)) ){
          this.graphics.strokeStyle = colors[i%4];
          if(i<h.length)
            this.graphics.strokeText(h[i++]+"", this.iX(x), this.iY(-0.5));
        }*/
        for (let i = 0; i < porcent.length; i++) {
            let x = i * 2;
            let y = porcent[i] * (this.rHeight - 2) / 100;
            this.graphics.strokeStyle = colors[i];
            this.barra(x, 0, y, colors[i]);
            this.graphics.fillStyle = colors[i];
            this.graphics.font = "bold 30px Arial";
            this.graphics.fillText(porcent[i] + "%", this.iX(x - 0.5), this.iY(-0.8));
        }
        this.graphics.fillStyle = 'blue';
        this.graphics.font = "bold 18px Arial";
        this.graphics.fillText("Nestor Yescas Ramos", this.iX(0), this.iY(7));
    }
}
