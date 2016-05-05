<template>
	<!--The HTML template for our component -->

    <div id="app">
    	<sidebar
		 :categories="categories"
		 v-on:category-selected="setSelectedCategory">
		 </sidebar>
		<bookmark-list 
		:bookmarks="bookmarks | filterByCategory selectedCategory"
		:categories="categories">
		</bookmark-list>

    </div>

</template>


<script>
		//the javascript for the component
		//we will export a Vue component options object here

</script>