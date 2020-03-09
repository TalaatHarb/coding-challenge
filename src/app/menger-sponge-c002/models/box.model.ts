export class Box {

    private pos: any;
    private r: number;

    constructor(x: number, y: number, z: number, r: number, p: any) {
        this.pos = p.createVector(x, y, z);
        this.r = r;
    }

    generate(p: any) {
        const boxes: Box[] = [];
        for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
                for (let z = -1; z < 2; z++) {
                    const sum = Math.abs(x) + Math.abs(y) + Math.abs(z);
                    const newR = this.r / 3;
                    if (sum > 1) {
                        const b = new Box(
                            this.pos.x + x * newR,
                            this.pos.y + y * newR,
                            this.pos.z + z * newR,
                            newR, p
                        );
                        boxes.push(b);
                    }
                }
            }
        }
        return boxes;
    }

    show(p: any) {
        p.push();
        p.translate(this.pos.x, this.pos.y, this.pos.z);
        p.box(this.r);
        p.pop();
    }
}
