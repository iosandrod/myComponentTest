<template>
  <div
    class="draggable-resizable"
    :style="{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})` }"
    @mousedown="startDrag">
    <div class="content" @mousedown="startResize"></div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { fromEvent, merge, map, takeUntil } from 'rxjs'
import { switchMap } from 'rxjs/operators'

export default {
  data() {
    return {
      position: { x: 0, y: 0 },
      scale: 1,
      isDragging: false,
      isResizing: false,
      initialMousePos: { x: 0, y: 0 },
    }
  },
  methods: {
    startDrag(event) {
      event.preventDefault()
      this.isDragging = true
      this.initialMousePos.x = event.clientX - this.position.x
      this.initialMousePos.y = event.clientY - this.position.y

      const mouseMove$ = fromEvent(document, 'mousemove').pipe(
        map((e) => ({
          x: e.clientX - this.initialMousePos.x,
          y: e.clientY - this.initialMousePos.y,
        })),
        takeUntil(fromEvent(document, 'mouseup')),
      )

      mouseMove$.subscribe((pos) => {
        if (this.isDragging) {
          this.position.x = pos.x
          this.position.y = pos.y
        }
      })
    },
    startResize(event) {
      event.preventDefault()
      this.isResizing = true

      const initialWidth = this.$el.offsetWidth
      const initialHeight = this.$el.offsetHeight

      const mouseMove$ = fromEvent(document, 'mousemove').pipe(
        map((e) => ({
          width: initialWidth + (e.clientX - event.clientX),
          height: initialHeight + (e.clientY - event.clientY),
        })),
        takeUntil(fromEvent(document, 'mouseup')),
      )

      mouseMove$
        .pipe(
          switchMap((size) => {
            if (this.isResizing) {
              this.scale = size.width / initialWidth
              return merge(mouseMove$, fromEvent(document, 'mouseup').pipe(map(() => false)))
            }
          }),
        )
        .subscribe()
    },
  },
}
</script>

<style scoped>
.draggable-resizable {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #3498db;
  cursor: move;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
  height: 100%;
  background-color: rgba(46, 204, 113, 0.7);
  cursor: nwse-resize;
}
</style>
