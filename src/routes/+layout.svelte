<script>
    import '../app.css'
</script>

<div class="flex bg-slate-300 justify-center items-center h-screen overflow-hidden">
    <div class="relative no-scrollbar md:max-w-[500px] md:w-[500px] bg-gray-100 h-screen overflow-scroll">
        <slot/>
    </div>
</div>


<style>
    .no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>