export class Star {
    private x: number;
    private y: number;
    private z: number;
    private pz: number;


    constructor(p: any) {
        this.x = p.random(-p.width, p.width);
        this.y = p.random(-p.height, p.height);
        this.z = p.random(p.width);
        this.pz = this.z;
    }

    update(speed: number, p: any) {
        this.z = this.z - speed;
        if (this.z < 1) {
            this.z = p.width;
            this.x = p.random(-p.width, p.width);
            this.y = p.random(-p.height, p.height);
            this.pz = this.z;
        }
    }

    show(p: any) {
        p.fill(255);
        p.noStroke();

        const sx = p.map(this.x / this.z, 0, 1, 0, p.width);
        const sy = p.map(this.y / this.z, 0, 1, 0, p.height);

        const r = p.map(this.z, 0, p.width, 16, 0);
        p.ellipse(sx, sy, r, r);

        const px = p.map(this.x / this.pz, 0, 1, 0, p.width);
        const py = p.map(this.y / this.pz, 0, 1, 0, p.height);

        this.pz = this.z;

        p.stroke(255);
        p.line(px, py, sx, sy);
    }
}
