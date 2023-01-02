export default {
	cmd: 'mac-file',
	help: 'mac-file <file> - Uses the `file` command to check the file architecture',
	async script(args, ufo, tools){
        const {$} = tools;
        await $`file ${args[0]}/Contents/MacOS/*`;
	}
}