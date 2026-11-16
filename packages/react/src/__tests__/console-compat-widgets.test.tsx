import { describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import {
  Badge,
  Button,
  CheckableTagGroup,
  Checkbox,
  CodeBlock,
  ContextQuickBar,
  CopyButton,
  CursorPagination,
  DescriptionItem,
  DescriptionList,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  FormField,
  HubNavBar,
  IconBadge,
  LocaleSwitcher,
  OffsetPagination,
  PageHeader,
  PageSection,
  ProgressBar,
  RadixSelect,
  RichIconText,
  Section,
  Select,
  SelectContent,
  SelectField,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SemanticIcon,
  Separator,
  StatCard,
  StatusBadge,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ToastCard,
  Toaster,
  WorkflowStepBanner,
  hubNavTabClassName,
  resolveSemanticLucideIcon,
  resolveStatusBadgeVariant,
  sonnerToast,
  stripLeadingEmoji,
  useSonner,
} from '../index'

describe('企业控制台与设计系统扩展原语测试', () => {
  it('CodeBlock / Separator / LocaleSwitcher / Badge / CopyButton 属性与交互完整', () => {
    const onToggle = vi.fn()
    const onSelectLocale = vi.fn()
    render(
      <div>
        <CodeBlock
          title="POST /v1/browser/jobs"
          language="bash"
          code="curl -X POST https://api.example.com"
          copyLabel="Copy snippet"
        />
        <Separator orientation="horizontal" />
        <Badge variant="success">active</Badge>
        <CopyButton value="prj_123" copyLabel="Copy ID" />
        <LocaleSwitcher locale="zh-CN" onToggle={onToggle} label="Switch language" />
        <LocaleSwitcher
          mode="segmented"
          locale="en-US"
          onSelectLocale={onSelectLocale}
          label="Language"
        />
      </div>
    )

    expect(screen.getByText('POST /v1/browser/jobs')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Copy snippet' })).toBeInTheDocument()
    expect(screen.getByText('active')).toHaveAttribute('data-slot', 'badge')
    expect(screen.getByRole('button', { name: 'Copy ID' })).toHaveAttribute(
      'data-slot',
      'copy-button'
    )

    const toggleBtn = screen.getByRole('button', { name: 'Switch language' })
    expect(toggleBtn).toHaveAttribute('data-slot', 'locale-switcher')
    fireEvent.click(toggleBtn)
    expect(onToggle).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByRole('button', { name: '中文' }))
    expect(onSelectLocale).toHaveBeenCalledWith('zh')
  })

  it('StatusBadge / SemanticIcon / IconBadge / RichIconText / stripLeadingEmoji 正常解析矢量图标与语义徽章', () => {
    expect(resolveStatusBadgeVariant('succeeded')).toBe('success')
    expect(resolveStatusBadgeVariant('reconciliation_required')).toBe('warning')
    expect(resolveStatusBadgeVariant('failed_permanently')).toBe('destructive')
    expect(resolveStatusBadgeVariant('running')).toBe('info')
    expect(resolveStatusBadgeVariant('unknown_custom')).toBe('neutral')

    expect(stripLeadingEmoji('🌐 Goto URL')).toBe('Goto URL')
    expect(stripLeadingEmoji('+ 📸 截图')).toBe('+ 截图')
    expect(resolveSemanticLucideIcon('goto')).toBeDefined()

    render(
      <div>
        <StatusBadge status="reconciliation_required" label="reconciliation required" />
        <IconBadge token="proxy" tone="emerald" size="md" data-testid="proxy-icon-badge" />
        <SemanticIcon token="repeat_until" size={14} data-testid="repeat-semantic-icon" />
        <RichIconText text="🌐 Goto 跳转网页" data-testid="goto-rich-text" />
        <RichIconText text="+ 📸 Screenshot" data-testid="screenshot-rich-text" />
      </div>
    )

    const badge = screen.getByText('reconciliation required').closest('[data-slot="status-badge"]')
    expect(badge).toHaveAttribute('data-slot', 'status-badge')
    expect(badge).toHaveAttribute('data-status', 'reconciliation_required')
    expect(screen.getByTestId('proxy-icon-badge').querySelector('svg')).not.toBeNull()
    expect(screen.getByTestId('repeat-semantic-icon').tagName.toLowerCase()).toBe('svg')
    expect(screen.getByTestId('goto-rich-text').querySelector('svg')).not.toBeNull()
    expect(screen.getByTestId('screenshot-rich-text')).toHaveTextContent('+ 📸 Screenshot')
  })

  it('CheckableTagGroup / Checkbox onCheckedChange / Switch / ProgressBar / Tabs / DropdownMenu / RadixSelect / Pagination / PageChrome', () => {
    const onTagChange = vi.fn()
    const onCheckedChange = vi.fn()
    const onSwitchChange = vi.fn()
    const onTabChange = vi.fn()
    const onSelectChange = vi.fn()
    const onNext = vi.fn()
    const onPageChange = vi.fn()
    const onDismiss = vi.fn()

    render(
      <div>
        <PageHeader eyebrow="Developer" title="API Reference" description="Unified page header" />
        <PageSection title="Quota Summary">
          <Section title="Nested Section">
            <ProgressBar aria-label="Browser seconds quota usage" value={92} />
          </Section>
          <DescriptionList columns={2}>
            <DescriptionItem label="Job ID" mono copyValue="job_01" value="job_01" />
          </DescriptionList>
        </PageSection>
        <HubNavBar navLabel="Workload Hub">
          <a href="#jobs" className={hubNavTabClassName(true, 'pill')}>
            Jobs
          </a>
        </HubNavBar>
        <WorkflowStepBanner
          badge="Guide"
          title="Workflow Steps"
          steps={[{ step: 1, title: 'Create', description: 'Submit job' }]}
          collapsible
        />
        <ContextQuickBar
          badge="Customer 360"
          title="Quick links"
          contextTags={[{ label: 'org', value: 'org_01' }]}
          actions={[{ href: '/billing', label: 'Billing' }]}
        />
        <CheckableTagGroup
          aria-label="API Scopes"
          values={['jobs:read']}
          onValuesChange={onTagChange}
          options={['jobs:read', 'jobs:write']}
        />
        <Checkbox label="Enable egress" checked={false} onCheckedChange={onCheckedChange} />
        <Switch label="Auto-drain" checked={true} onCheckedChange={onSwitchChange} />
        <Tabs value="curl" onValueChange={onTabChange}>
          <TabsList>
            <TabsTrigger value="curl">cURL</TabsTrigger>
            <TabsTrigger value="py">Python</TabsTrigger>
          </TabsList>
          <TabsContent value="curl">curl snippet</TabsContent>
          <TabsContent value="py">python snippet</TabsContent>
        </Tabs>
        <DropdownMenu open>
          <DropdownMenuTrigger>Actions</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Revoke token</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <RadixSelect defaultValue="us-east" onValueChange={onSelectChange}>
          <SelectTrigger aria-label="Region">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us-east">US East</SelectItem>
            <SelectItem value="eu-west">EU West</SelectItem>
          </SelectContent>
        </RadixSelect>
        <CursorPagination
          count={10}
          limit={25}
          hasPrev={false}
          hasNext={true}
          prevLabel="Previous"
          nextLabel="Next"
          onPrev={() => {}}
          onNext={onNext}
        />
        <OffsetPagination total={45} page={1} pageSize={10} onPageChange={onPageChange} />
        <ToastCard
          id="t1"
          variant="error"
          title="Quota Exceeded"
          message="Limit reached"
          status={429}
          code="QUOTA_EXCEEDED"
          requestId="req_01"
          durationMs={null}
          onDismiss={onDismiss}
        />
      </div>
    )

    expect(screen.getByRole('heading', { level: 1, name: 'API Reference' })).toBeInTheDocument()
    const progress = screen.getByRole('progressbar', { name: 'Browser seconds quota usage' })
    expect(progress).toHaveAttribute('aria-valuenow', '92')
    expect(progress).toHaveAttribute('aria-valuetext', '92% used')

    fireEvent.click(screen.getByRole('checkbox', { name: 'jobs:write' }))
    expect(onTagChange).toHaveBeenCalledWith(['jobs:read', 'jobs:write'])

    fireEvent.click(screen.getByRole('checkbox', { name: 'Enable egress' }))
    expect(onCheckedChange).toHaveBeenCalledWith(true)

    fireEvent.click(screen.getByRole('switch', { name: 'Auto-drain' }))
    expect(onSwitchChange).toHaveBeenCalledWith(false)

    fireEvent.click(screen.getByRole('tab', { name: 'Python' }))
    expect(onTabChange).toHaveBeenCalledWith('py')
    expect(screen.getByText('Revoke token')).toHaveAttribute('data-slot', 'dropdown-menu-item')

    fireEvent.click(screen.getByRole('combobox', { name: 'Region' }))
    fireEvent.click(screen.getByRole('option', { name: 'EU West' }))
    expect(onSelectChange).toHaveBeenCalledWith('eu-west')

    const nextButtons = screen.getAllByRole('button', { name: 'Next' })
    fireEvent.click(nextButtons[0])
    expect(onNext).toHaveBeenCalledTimes(1)
    fireEvent.click(nextButtons[1])
    expect(onPageChange).toHaveBeenCalledWith(2)

    fireEvent.click(screen.getByRole('button', { name: 'Dismiss Quota Exceeded' }))
    expect(onDismiss).toHaveBeenCalledWith('t1')
  })

  it('StatCard / FormField 独立模式 / Button aria-busy / Select emoji 选项 / Toaster clear-all 兼容行为正常', () => {
    const onClearAll = vi.fn()
    function ToastHookProbe() {
      const { toasts } = useSonner()
      return <span data-testid="sonner-count">{toasts.length}</span>
    }

    render(
      <div>
        <dl>
          <StatCard label="Active Sessions" value="18" tone="surface" trend="+12%" />
        </dl>
        <FormField
          label="API Token"
          hint="Keep this secret safe"
          error="Required field"
          type="password"
          defaultValue="tok_abc"
          dark
        />
        <Button loading>Submitting</Button>
        <Select aria-label="Engine">
          <optgroup label="Engines">
            <option value="fast">🚀 Fast CDP</option>
          </optgroup>
        </Select>
        <SelectField
          aria-label="Tier"
          defaultValue="pro"
          options={[
            { value: 'free', label: 'Free' },
            { value: 'pro', label: 'Pro' },
          ]}
        />
        <DropdownMenu open>
          <DropdownMenuTrigger asChild>
            <Button>Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Inspect</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Toaster clearAllLabel="Clear All" onClearAll={onClearAll} />
        <ToastHookProbe />
      </div>
    )

    expect(screen.getByText('Active Sessions').closest('[data-slot="stat-card"]')).toHaveAttribute(
      'data-slot',
      'stat-card'
    )
    const tokenInput = screen.getByLabelText('API Token')
    expect(tokenInput).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Submitting').closest('button')).toHaveAttribute('aria-busy', 'true')

    const engineTrigger = document.querySelector('[data-slot="select-trigger"]') as HTMLElement
    fireEvent.click(engineTrigger)
    expect(document.querySelector('[data-slot="select-popover"]')).not.toBeNull()
    expect(document.querySelectorAll('[data-slot="select-option"]').length).toBeGreaterThan(0)
    expect(screen.getByText('Actions')).toHaveAttribute('data-slot', 'dropdown-menu-label')

    act(() => {
      sonnerToast.custom(
        (id) => (
          <ToastCard
            id={String(id)}
            variant="error"
            title="Err 1"
            message="Msg 1"
            durationMs={null}
            onDismiss={() => sonnerToast.dismiss(id)}
          />
        ),
        { id: 'c1', duration: Infinity }
      )
      sonnerToast.custom(
        (id) => (
          <ToastCard
            id={String(id)}
            variant="warning"
            title="Warn 2"
            message="Msg 2"
            durationMs={null}
            onDismiss={() => sonnerToast.dismiss(id)}
          />
        ),
        { id: 'c2', duration: Infinity }
      )
    })

    expect(screen.getByTestId('sonner-count')).toHaveTextContent('2')
    const clearBtn = screen.getByTestId('toast-clear-all')
    fireEvent.click(clearBtn)
    expect(onClearAll).toHaveBeenCalledTimes(1)
    expect(screen.getByTestId('sonner-count')).toHaveTextContent('0')
  })
})
