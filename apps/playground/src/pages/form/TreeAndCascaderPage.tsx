import React, { useState } from 'react'
import {
  Cascader,
  PageContainer,
  Tree,
  TreeSelect,
  TreeSelectField,
  type AbcCheckedStrategy,
  type AbcSize,
  type AbcTreeNode,
  type AbcTreeSelectNode,
  type CascaderValue,
  type TreeSelectValue,
} from '@abc-design/react'
import { ComponentDocPreview } from '../../components/ComponentDocPreview'
import { KnobSegmented, KnobSwitch } from '../../components/PropKnobs'
import {
  FLAT_SIMPLE_ORG,
  INITIAL_LAZY_TREE,
  LARGE_VIRTUAL_TREE,
  ORG_TREE,
  REGION_OPTIONS,
} from './formMockData'

const SIZE_OPTIONS = [
  { label: 'xs', value: 'xs' as const },
  { label: 'sm', value: 'sm' as const },
  { label: 'md', value: 'md' as const },
  { label: 'lg', value: 'lg' as const },
]

export const TreeAndCascaderPage: React.FC = () => {
  // Card 1: Tree
  const [treeCheckable, setTreeCheckable] = useState(true)
  const [treeCheckStrictly, setTreeCheckStrictly] = useState(false)
  const [treeSearchable, setTreeSearchable] = useState(true)
  const [checkedKeys, setCheckedKeys] = useState<Array<string | number>>(['sys:user', 'sys:role'])
  const [halfKeys, setHalfKeys] = useState<Array<string | number>>(['sys'])
  const [selectedKeys, setSelectedKeys] = useState<Array<string | number>>(['sys:user'])

  // Card 2: TreeSelect & TreeSelectField
  const [tsSize, setTsSize] = useState<AbcSize>('sm')
  const [tsCheckable, setTsCheckable] = useState(true)
  const [checkedStrategy, setCheckedStrategy] = useState<AbcCheckedStrategy>(TreeSelect.SHOW_PARENT)
  const [tsCheckStrictly, setTsCheckStrictly] = useState(false)
  const [selectableLeafOnly, setSelectableLeafOnly] = useState(true)
  const [maxTagCount, setMaxTagCount] = useState<number>(2)
  const [tsSearchable, setTsSearchable] = useState(true)
  const [tsAllowClear, setTsAllowClear] = useState(true)
  const [tsDisabled, setTsDisabled] = useState(false)
  const [virtualHeight, setVirtualHeight] = useState<number>(240)

  const [tsSingle, setTsSingle] = useState<TreeSelectValue>('sys:user')
  const [tsMulti, setTsMulti] = useState<Array<string | number>>(['sys'])
  const [simpleOrgVal, setSimpleOrgVal] = useState<TreeSelectValue>('EDGE')
  const [lazyTreeData, setLazyTreeData] = useState<AbcTreeNode[]>(INITIAL_LAZY_TREE)
  const [lazyVal, setLazyVal] = useState<TreeSelectValue>('')
  const [virtualVal, setVirtualVal] = useState<TreeSelectValue>('vnode-1')

  const handleLoadLazy = async (node: AbcTreeSelectNode) => {
    await new Promise((r) => setTimeout(r, 280))
    setLazyTreeData((prev) =>
      prev.map((item) =>
        item.key === node.key
          ? {
              ...item,
              children: [
                { key: `${node.key}-a`, title: `${String(node.key).toUpperCase()} 可用区 A`, isLeaf: true },
                { key: `${node.key}-b`, title: `${String(node.key).toUpperCase()} 可用区 B`, isLeaf: true },
              ],
            }
          : item
      )
    )
  }

  // Card 3: Cascader
  const [casSize, setCasSize] = useState<AbcSize>('sm')
  const [casMultiple, setCasMultiple] = useState(false)
  const [changeOnSelect, setChangeOnSelect] = useState(false)
  const [casSearchable, setCasSearchable] = useState(true)
  const [casClearable, setCasClearable] = useState(true)
  const [casDisabled, setCasDisabled] = useState(false)
  const [singleCas, setSingleCas] = useState<CascaderValue>(['cn-east', 'shanghai', 'sh-1'])
  const [multiCas, setMultiCas] = useState<CascaderValue>([['cn-east', 'shanghai', 'sh-1']])

  return (
    <PageContainer
      title="树形控件、TreeSelect 与级联"
      subtitle="涵盖层级勾选树 Tree、五大企业场景树形下拉选择器 TreeSelect / TreeSelectField 以及多列级联选择器 Cascader。"
    >
      <div className="space-y-5">
        {/* 卡片 1：Tree */}
        <ComponentDocPreview
          title="Tree 层级勾选与拼音搜索树"
          components={['Tree']}
          description="内置 @abc-design/core 父子级联与半选态计算引擎、拼音首字母搜索自动展开及全部展开/折叠工具栏。"
          onResetKnobs={() => {
            setTreeCheckable(true)
            setTreeCheckStrictly(false)
            setTreeSearchable(true)
          }}
          controls={
            <>
              <KnobSwitch label="checkable" checked={treeCheckable} onChange={setTreeCheckable} />
              <KnobSwitch label="checkStrictly" checked={treeCheckStrictly} onChange={setTreeCheckStrictly} />
              <KnobSwitch label="searchable" checked={treeSearchable} onChange={setTreeSearchable} />
            </>
          }
          code={`import { Tree } from '@abc-design/react'

<Tree
  treeData={ORG_TREE}
  checkable={${treeCheckable}}
  checkStrictly={${treeCheckStrictly}}
  searchable={${treeSearchable}}
  showToolbar
  checkedKeys={checkedKeys}
  onCheck={(keys, info) => setCheckedKeys(keys)}
/>`}
          apiRows={[
            { prop: 'treeData', type: 'AbcTreeNode[]', required: true, description: '树节点数据（key, title, children, disabled, icon）' },
            { prop: 'checkable', type: 'boolean', defaultValue: 'false', description: '是否显示节点复选框' },
            { prop: 'checkStrictly', type: 'boolean', defaultValue: 'false', description: '开启后父子节点勾选完全独立，不推导半选态' },
            { prop: 'searchable / showToolbar', type: 'boolean', defaultValue: 'false', description: '显示顶部拼音搜索框与全部展开/折叠栏' },
            { prop: 'onCheck', type: '(checkedKeys, { halfCheckedKeys, node, checked }) => void', description: '勾选变更回调，附带半选祖先节点集合' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Tree
              treeData={ORG_TREE}
              checkable={treeCheckable}
              checkStrictly={treeCheckStrictly}
              searchable={treeSearchable}
              showToolbar
              checkedKeys={checkedKeys}
              onCheck={(keys, info) => {
                setCheckedKeys(keys)
                setHalfKeys(info.halfCheckedKeys)
              }}
              selectedKeys={selectedKeys}
              onSelect={(keys) => setSelectedKeys(keys)}
            />
            <div className="rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-3.5 text-xs space-y-2">
              <div className="font-semibold text-[var(--abc-fg)]">
                {treeCheckable ? '当前已勾选 Key (checkedKeys)：' : '当前点击选中 Key (selectedKeys)：'}
              </div>
              <pre className="overflow-x-auto font-mono text-[11px] text-[var(--abc-primary)]">
                {JSON.stringify(
                  treeCheckable ? { checkedKeys, halfCheckedKeys: treeCheckStrictly ? [] : halfKeys } : selectedKeys,
                  null,
                  2
                )}
              </pre>
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 2：TreeSelect & TreeSelectField */}
        <ComponentDocPreview
          title="TreeSelect & TreeSelectField 树形下拉选择器"
          components={['TreeSelect', 'TreeSelectField']}
          description="覆盖单选限叶子、级联复选收敛策略、扁平 id/pId 自动构树、异步懒加载 loadData 与 3,000 节点窗口虚拟滚动五大场景。"
          onResetKnobs={() => {
            setTsSize('sm')
            setTsCheckable(true)
            setCheckedStrategy(TreeSelect.SHOW_PARENT)
            setTsCheckStrictly(false)
            setSelectableLeafOnly(true)
            setMaxTagCount(2)
            setTsSearchable(true)
            setTsAllowClear(true)
            setTsDisabled(false)
            setVirtualHeight(240)
          }}
          controls={
            <>
              <KnobSegmented label="size" value={tsSize} options={SIZE_OPTIONS} onChange={setTsSize} />
              <KnobSegmented
                label="showCheckedStrategy"
                value={checkedStrategy}
                options={[
                  { label: 'SHOW_PARENT', value: TreeSelect.SHOW_PARENT },
                  { label: 'SHOW_CHILD', value: TreeSelect.SHOW_CHILD },
                  { label: 'SHOW_ALL', value: TreeSelect.SHOW_ALL },
                ]}
                onChange={setCheckedStrategy}
              />
              <KnobSegmented
                label="maxTagCount"
                value={maxTagCount}
                options={[
                  { label: '1', value: 1 },
                  { label: '2', value: 2 },
                  { label: '4', value: 4 },
                ]}
                onChange={setMaxTagCount}
              />
              <KnobSegmented
                label="virtualHeight"
                value={virtualHeight}
                options={[
                  { label: '180', value: 180 },
                  { label: '240', value: 240 },
                  { label: '320', value: 320 },
                ]}
                onChange={setVirtualHeight}
              />
              <KnobSwitch label="treeCheckable" checked={tsCheckable} onChange={setTsCheckable} />
              <KnobSwitch label="treeCheckStrictly" checked={tsCheckStrictly} onChange={setTsCheckStrictly} />
              <KnobSwitch label="selectableLeafOnly" checked={selectableLeafOnly} onChange={setSelectableLeafOnly} />
              <KnobSwitch label="searchable" checked={tsSearchable} onChange={setTsSearchable} />
              <KnobSwitch label="allowClear" checked={tsAllowClear} onChange={setTsAllowClear} />
              <KnobSwitch label="disabled" checked={tsDisabled} onChange={setTsDisabled} />
            </>
          }
          code={`import { TreeSelect, TreeSelectField } from '@abc-design/react'

<TreeSelectField
  size="${tsSize}"
  treeData={ORG_TREE}
  selectableLeafOnly={${selectableLeafOnly}}
  searchable={${tsSearchable}}
  allowClear={${tsAllowClear}}
  disabled={${tsDisabled}}
  value={singleVal}
  onValueChange={setSingleVal}
/>

<TreeSelect
  size="${tsSize}"
  treeData={ORG_TREE}
  multiple
  treeCheckable={${tsCheckable}}
  treeCheckStrictly={${tsCheckStrictly}}
  showCheckedStrategy="${checkedStrategy}"
  maxTagCount={${maxTagCount}}
  listHeight={${virtualHeight}}
  searchable={${tsSearchable}}
  allowClear={${tsAllowClear}}
  disabled={${tsDisabled}}
  value={multiVal}
  onChange={setMultiVal}
/>`}
          apiRows={[
            { prop: 'treeData / fieldNames', type: 'Record<string, any>[] / AbcTreeFieldNames', description: '数据源与自定义字段映射（label / value / children）' },
            { prop: 'treeDataSimpleMode', type: 'boolean | { id, pId, rootPId }', defaultValue: 'false', description: '扁平数组自动依据 id/pId 构造完整层级树' },
            { prop: 'treeCheckable / showCheckedStrategy', type: "boolean / 'SHOW_PARENT' | 'SHOW_CHILD' | 'SHOW_ALL'", defaultValue: "'SHOW_PARENT'", description: '复选框级联模式与值收敛回填策略' },
            { prop: 'treeCheckStrictly / selectableLeafOnly', type: 'boolean', defaultValue: 'false', description: '父子勾选解耦 / 单选限制仅允许选中叶子节点' },
            { prop: 'maxTagCount', type: "number | 'responsive'", description: '多选标签展示上限，超出自动折叠为 +N' },
            { prop: 'loadData / virtual / listHeight', type: '(node) => Promise<void> / boolean / number', defaultValue: 'listHeight: 280', description: '异步懒加载子节点及可见行 >40 自动启用的固定行高虚拟滚动' },
          ]}
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <TreeSelectField
              label="1. 基础单选限叶子 (TreeSelectField)"
              size={tsSize}
              treeData={ORG_TREE}
              value={tsSingle}
              onValueChange={setTsSingle}
              selectableLeafOnly={selectableLeafOnly}
              searchable={tsSearchable}
              allowClear={tsAllowClear}
              disabled={tsDisabled}
              treeDefaultExpandAll
              helperText={`选中值：${String(tsSingle || '(空)')}`}
            />
            <TreeSelect
              label="2. 级联多选与收敛策略 (TreeSelect)"
              size={tsSize}
              treeData={ORG_TREE}
              multiple
              treeCheckable={tsCheckable}
              treeCheckStrictly={tsCheckStrictly}
              showCheckedStrategy={checkedStrategy}
              maxTagCount={maxTagCount}
              searchable={tsSearchable}
              allowClear={tsAllowClear}
              disabled={tsDisabled}
              treeDefaultExpandAll
              value={tsMulti}
              onChange={(val) => setTsMulti(Array.isArray(val) ? val : val ? [val] : [])}
              helperText={`回传数组：${JSON.stringify(tsMulti)}`}
            />
            <TreeSelect
              label="3. 扁平 treeDataSimpleMode + fieldNames"
              size={tsSize}
              treeData={FLAT_SIMPLE_ORG}
              treeDataSimpleMode={{ id: 'deptId', pId: 'parentId', rootPId: null }}
              fieldNames={{ label: 'deptName', value: 'deptCode' }}
              searchable={tsSearchable}
              allowClear={tsAllowClear}
              disabled={tsDisabled}
              treeDefaultExpandAll
              value={simpleOrgVal}
              onChange={(val) => setSimpleOrgVal(val)}
              helperText={`映射 deptCode：${String(simpleOrgVal || '(空)')}`}
            />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <TreeSelect
                label="4. 异步懒加载 loadData"
                size={tsSize}
                treeData={lazyTreeData}
                loadData={handleLoadLazy}
                allowClear={tsAllowClear}
                disabled={tsDisabled}
                value={lazyVal}
                onChange={(val) => setLazyVal(val)}
                placeholder="展开大区异步加载"
              />
              <TreeSelect
                label="5. 3,000 节点虚拟滚动"
                size={tsSize}
                treeData={LARGE_VIRTUAL_TREE}
                virtual
                listHeight={virtualHeight}
                itemHeight={30}
                searchable={tsSearchable}
                allowClear={tsAllowClear}
                disabled={tsDisabled}
                value={virtualVal}
                onChange={(val) => setVirtualVal(val)}
              />
            </div>
          </div>
        </ComponentDocPreview>

        {/* 卡片 3：Cascader */}
        <ComponentDocPreview
          title="Cascader 多列级联选择器"
          components={['Cascader']}
          description="支持单选/多选胶囊、changeOnSelect 逐级直选、全路径拼音首字母检索及方向键多列游走。"
          onResetKnobs={() => {
            setCasSize('sm')
            setCasMultiple(false)
            setChangeOnSelect(false)
            setCasSearchable(true)
            setCasClearable(true)
            setCasDisabled(false)
          }}
          controls={
            <>
              <KnobSegmented label="size" value={casSize} options={SIZE_OPTIONS} onChange={setCasSize} />
              <KnobSwitch label="multiple" checked={casMultiple} onChange={setCasMultiple} />
              <KnobSwitch label="changeOnSelect" checked={changeOnSelect} onChange={setChangeOnSelect} />
              <KnobSwitch label="searchable" checked={casSearchable} onChange={setCasSearchable} />
              <KnobSwitch label="clearable" checked={casClearable} onChange={setCasClearable} />
              <KnobSwitch label="disabled" checked={casDisabled} onChange={setCasDisabled} />
            </>
          }
          code={`import { Cascader } from '@abc-design/react'

<Cascader
  label="调度地域可用区"
  size="${casSize}"
  options={REGION_OPTIONS}
  multiple={${casMultiple}}
  changeOnSelect={${changeOnSelect}}
  searchable={${casSearchable}}
  clearable={${casClearable}}
  disabled={${casDisabled}}
  value={value}
  onChange={setValue}
/>`}
          apiRows={[
            { prop: 'options', type: 'CascaderOption[]', required: true, description: '树形级联选项（value, label, children, disabled, isLeaf）' },
            { prop: 'multiple', type: 'boolean', defaultValue: 'false', description: '开启多选模式与路径胶囊标签' },
            { prop: 'changeOnSelect', type: 'boolean', defaultValue: 'false', description: '单选时允许点击非叶子节点直接选中' },
            { prop: 'searchable / clearable', type: 'boolean', defaultValue: 'false', description: '开启全路径拼音搜索与一键清空' },
            { prop: 'size / disabled', type: 'AbcSize / boolean', defaultValue: "'sm'", description: '触发器四档尺寸规格与禁用态' },
          ]}
        >
          <div className="max-w-lg">
            <Cascader
              key={casMultiple ? 'multi' : 'single'}
              label="部署区域与可用区（支持拼音搜索如 pd / xh）"
              size={casSize}
              options={REGION_OPTIONS}
              multiple={casMultiple}
              changeOnSelect={changeOnSelect}
              searchable={casSearchable}
              clearable={casClearable}
              disabled={casDisabled}
              value={casMultiple ? multiCas : singleCas}
              onChange={(val) => (casMultiple ? setMultiCas(val) : setSingleCas(val))}
              helperText={`当前路径值：${JSON.stringify(casMultiple ? multiCas : singleCas)}`}
            />
          </div>
        </ComponentDocPreview>
      </div>
    </PageContainer>
  )
}

export default TreeAndCascaderPage
