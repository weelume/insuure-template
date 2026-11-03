import test from 'node:test'
import assert from 'node:assert/strict'
import {readFile,access} from 'node:fs/promises'
const root=new URL('../',import.meta.url)
const metadata=JSON.parse(await readFile(new URL('.tpl/template.json',root),'utf8'))
test('页面与双语合同完整且路径唯一',()=>{const pages=metadata.surfaces[0].pages;assert.equal(pages.length,17);assert.equal(new Set(pages.map(p=>p.slug)).size,17);for(const p of pages){assert.ok(p.title);assert.ok(p.localizedTitles.en);assert.match(p.slug,/^[a-z0-9/-]*$/)}})
test('本地媒体真实存在并与来源摘要一致',async()=>{const {createHash}=await import('node:crypto');const manifest=JSON.parse(await readFile(new URL('public/templates/insuure/sources.json',root),'utf8'));for(const source of manifest.sources){const data=await readFile(new URL('public/templates/insuure/'+source.file,root));assert.equal(createHash('sha256').update(data).digest('hex'),source.sha256)}})
test('市场截图均为已生成文件',async()=>{for(const shot of metadata.screenshots)await access(new URL('.tpl/'+shot.src,root))})
