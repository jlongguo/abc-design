import React, { useState } from 'react'
import {
  Button,
  Card,
  FormField,
  Input,
  InputNumber,
  Result,
  Select,
  Steps,
  Switch,
  TagInput,
  Textarea,
  useAbcConfig,
} from '@abc-design/react'

export interface WizardFormTemplateProps {
  onGoCrud: () => void
}

/**
 * 模板 3：分步创建向导表单页
 */
export const WizardFormTemplate: React.FC<WizardFormTemplateProps> = ({ onGoCrud }) => {
  const { toast } = useAbcConfig()
  const [wizardStep, setWizardStep] = useState(0)
  const [wizardForm, setWizardForm] = useState({
    company: '星辰智算科技有限公司',
    subdomain: 'xingchen-ai',
    region: 'cn-east-hangzhou',
    maxQps: 5000,
    tags: ['独享RDS', '高防IP'],
    enableWaf: true,
    remark: '签约年框 VIP 客户，需开启双活容灾。',
  })

  return (
    <Card title="多租户专属资源池开通向导" subtitle="适用于复杂云资源编排、渠道入驻签约、分步计费配置">
      <div className="space-y-6">
        <Steps
          current={wizardStep}
          onChange={(idx) => idx < 2 && setWizardStep(idx)}
          items={[
            { title: '主体与域名信息', description: '配置企业主体与二级子域名' },
            { title: '算力配额与风控策略', description: '设定网关并发上限与安全防线' },
            { title: '集群编排完成', description: '生成租户初始化凭证' },
          ]}
        />

        {wizardStep === 0 && (
          <div className="mx-auto max-w-xl space-y-4 pt-2">
            <FormField label="签约企业全称" required>
              <Input
                value={wizardForm.company}
                clearable
                onChange={(e) => setWizardForm((p) => ({ ...p, company: e.target.value }))}
              />
            </FormField>
            <FormField label="专属控制台二级域名" required helperText="开通后可通过 https://<子域名>.bytesflows.com 访问">
              <Input
                value={wizardForm.subdomain}
                suffix=".bytesflows.com"
                onChange={(e) => setWizardForm((p) => ({ ...p, subdomain: e.target.value }))}
              />
            </FormField>
            <FormField label="主数据中心地域" required>
              <Select
                value={wizardForm.region}
                onChange={(v) => setWizardForm((p) => ({ ...p, region: String(v) }))}
                options={[
                  { label: '华东 1（杭州金融可用区）', value: 'cn-east-hangzhou' },
                  { label: '华北 2（北京政企可用区）', value: 'cn-north-beijing' },
                  { label: '亚太东南 1（新加坡国际区）', value: 'ap-southeast-sg' },
                ]}
              />
            </FormField>
            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                onClick={() => {
                  if (!wizardForm.company.trim() || !wizardForm.subdomain.trim()) {
                    toast.warning('请填写完整的企业名称与专属域名')
                    return
                  }
                  setWizardStep(1)
                }}
              >
                下一步：配置算力配额
              </Button>
            </div>
          </div>
        )}

        {wizardStep === 1 && (
          <div className="mx-auto max-w-xl space-y-4 pt-2">
            <FormField label="网关峰值限流阈值 (QPS)" required>
              <InputNumber
                value={wizardForm.maxQps}
                min={500}
                max={100000}
                step={500}
                onChange={(v) => setWizardForm((p) => ({ ...p, maxQps: v ?? 1000 }))}
              />
            </FormField>
            <FormField label="附加资源特性标签">
              <TagInput
                value={wizardForm.tags}
                onChange={(tags) => setWizardForm((p) => ({ ...p, tags }))}
              />
            </FormField>
            <FormField label="开启云原生 WAF 注入防护">
              <Switch
                checked={wizardForm.enableWaf}
                onChange={(checked) => setWizardForm((p) => ({ ...p, enableWaf: checked }))}
              />
            </FormField>
            <FormField label="交付实施备注">
              <Textarea
                value={wizardForm.remark}
                showCount
                maxLength={200}
                onChange={(e) => setWizardForm((p) => ({ ...p, remark: e.target.value }))}
              />
            </FormField>
            <div className="flex justify-between pt-2">
              <Button variant="secondary" onClick={() => setWizardStep(0)}>
                上一步
              </Button>
              <Button variant="primary" onClick={() => setWizardStep(2)}>
                确认编排并立即交付
              </Button>
            </div>
          </div>
        )}

        {wizardStep === 2 && (
          <Result
            status="success"
            title={`『${wizardForm.company}』专属租户集群已交付就绪`}
            subTitle={`控制台入口 https://${wizardForm.subdomain}.bytesflows.com 已完成泛域名签发，峰值配额 ${wizardForm.maxQps} QPS。`}
            extra={
              <>
                <Button variant="secondary" onClick={() => setWizardStep(0)}>
                  继续开通新租户
                </Button>
                <Button variant="primary" onClick={onGoCrud}>
                  前往租户台账查看
                </Button>
              </>
            }
          />
        )}
      </div>
    </Card>
  )
}
