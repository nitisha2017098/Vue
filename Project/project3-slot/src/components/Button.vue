<template>
<div class="my-3">
    <a href=" " class="btn btn-primary"><em class="fa fa-user"></em>&nbsp;{{ name }}</a>
</div>
</template>

  
<script>
export default{
    props:['name'],
    name: "My-Button",
}
</script>
